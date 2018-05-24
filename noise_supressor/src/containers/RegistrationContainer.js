import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Title from './../components/Title';
import Registration from './../components/Registration';
import { tryRegisterUser } from './../actions/registrationActions';
import {showLogInForm} from './../actions/viewActions';

class RegistrationContainer extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		isRegistered: PropTypes.bool.isRequired,
		isRequesting: PropTypes.bool.isRequired,
		registrationMessage: PropTypes.string.isRequired,
	}

	state = {
		knowRules: true
	}

	openLoginForm = () => {
		const {dispatch} = this.props;

		dispatch(showLogInForm());
	}

	submitRegistrationForm = (values, dispatch) => {
		dispatch(tryRegisterUser(values));
	}

	allowRegister = () => {
		this.setState({
			knowRules: !this.state.knowRules
		});
	}

	switchState = (key, callback) => e => {
		this.setState({
			[key]: !this.state[key]
		});

		if (callback) callback();
	}


	render() {
		return (
			<div className='main main_registration'>
				<Title block='main' text='Sign up to Noise Supressor' />
				<Registration {...this.props}
					{...this.state}
					submitRegistrationForm={this.submitRegistrationForm}
					allowRegister={this.allowRegister}
					openLoginForm={this.openLoginForm}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const {
		registration
	} = state;

	const {
		isRequesting,
		isRegistered,
		registrationMessage
	} = registration;

	return {
		isRequesting,
		isRegistered,
		registrationMessage
	};
}

export default connect(mapStateToProps)(RegistrationContainer);
