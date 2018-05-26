import React, {Component} from 'react';
import { connect } from 'react-redux';

import Title from './../components/Title';
import LogInForm from './../components/LogInForm';
import {
  tryLogin,
  showRecoverPasswordForm
} from './../actions/accountActions';
import { cookiesHandler } from './../constants/pureFunctions';

class LogInContainer extends Component {

	componentDidMount() {
		this.loginInIfMay();
  }

	loginInIfMay = () => {
      const { dispatch, isLogged } = this.props;

      const data = cookiesHandler.getUsernameAndPasswordFromCookies();

      if (!isLogged &&
        (data.username && data.password)) {
        dispatch(tryLogin(data));
      }
  }

  submitLogInForm = (values, dispatch) => {
    dispatch(tryLogin(values));
  }

  showRecoverPasswordForm = () => {
    const {dispatch} = this.props;
    
    dispatch(showRecoverPasswordForm());
  }

  render() {
		return (
			<div className='main main_signIn'>
				<Title block='main' text='Sign in to Noise Supressor' />
				<LogInForm showRecoverPasswordForm={this.showRecoverPasswordForm}
                  submitLogInForm={this.submitLogInForm}
                  {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const {
      account
    } = state;

	const {
      username,
      password,
      isLogged,
      isLogining,
      message
    } = account;


    return {
      isLogining,
      username,
      password,
      message,
      isLogged
    };
}

export default connect(mapStateToProps)(LogInContainer);
