import React, { Component } from "react";
import { connect } from "react-redux";
import { TweenLite } from "gsap";

import "./App.css";
import BaseButton from './components/BaseButton'
import Loader from "./components/Loader";
import WordsList from "./components/WordsList";
import AddWordForm from "./components/AddWordForm";
import LogInContainer from "./containers/LogInContainer";
import RegistrationContainer from "./containers/RegistrationContainer";

import { tryChangeUserAvatar, tryLogOut } from "./actions/account";
import { tryAddWord, tryRemoveWord } from "./actions/user";
import viewsNames from './constants/views';
import {
  setViewShown,
  showView
} from "./actions/views";



class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(showLogInForm());
  }

  componentDidUpdate() {
    const { didFadeIn, dispatch } = this.props;
    const {main} = this.refs;


    if (!didFadeIn && main) {
      TweenLite.to(node, 1.2, {
        opacity: 1
      });

      dispatch(setViewShown());
    }
  }

  addWordFormSubmit = (values, dispatch) => {
    const { words, uuid } = this.props;

    dispatch(tryAddWord(words, values.word, uuid));
  };

  removeWord = word => {
    const { words, uuid, dispatch } = this.props;

    return () => {
      dispatch(tryRemoveWord(words, word, uuid));
    };
  };

  logOut = () => {
    const { dispatch } = this.props;

    dispatch(tryLogOut());
  };

  submitChangeAvatar = avatars => {
    const { username, dispatch, userData } = this.props;
    const data = {
      username: username,
      oldAvatar: userData.avatar,
      newAvatar: avatars[0]
    };

    dispatch(tryChangeUserAvatar(data));
  };

  switchView = viewName => () => {
    const { dispatch } = this.props;

    dispatch(showView(viewName));
  }

  isShown = (viewName) => {
    const {shownViewName} = this.props;

    return shownViewName === viewName;
  }

  render() {
    const {
      words,
      is_requesting,
      isLogged,
      isShownRegistrationForm,
      shownViewName
    } = this.props;
    const {isShown} = this;
    const {login, registration} = viewsNames;

    const isShownLogInForm = isShown(login);
    const isShownRegistrationForm = isShown(registration);

    return (
      <div className="workPlaceContainer">
        <p className="mainTitle">Which a noise do you want to drown out?</p>

        <div className="mainInfo width_fill shadow_dark">
          <header id="header" className="mainInfoHeader parent parent_row">
            <h1 className="mainInfoHeader__title font-size_base">
              Noise<br />supressor
            </h1>
            <div className="mainInfoHeaderContent parent parent_row parent_v-centered parent_h-end">
              {isLogged ? (
                <BaseButton
                  onClick={this.logOut}
                >
                  Sign out
                </BaseButton>
              ) : (
                ""
              )}
              {(isShownLogInForm || isShownRegistrationForm)
                && !isLogged ?
                  <BaseButton
                    onClick={this.switchView(
                      isShownLogInForm ?
                        registration
                        : login
                    )}
                  >
                    {isShownLogInForm ? 'Sing up' : 'Sing in'}
                  </BaseButton>

              : ""}
            </div>
          </header>

          <main className="mainContent relative">
            {isLogged ?
              <AddWordForm onSubmit={this.addWordFormSubmit} />
              : ""}

            {isLogged ? (
              !is_requesting ? (
                <div ref="main" className="main">
                  <WordsList words={words} removeWord={this.removeWord} />
                </div>
              )
              : (
                <Loader className="wordsLoading" />
              )
            )
            : ""}

            {!isLogged ? (
              isShownRegistrationForm ?
                <RegistrationContainer />
                : <LogInContainer />
            ) : (
              ""
            )}
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user, account, view } = state;
  const { words, is_requesting } = user;
  const { uuid, isLogged } = account;
  const {
    shownViewName,
    didFadeIn
  } = views;

  return {
    uuid,
    words,
    is_requesting,
    isLogged,
    shownViewName,
    didFadeIn
  };
};

export default connect(mapStateToProps)(App);
