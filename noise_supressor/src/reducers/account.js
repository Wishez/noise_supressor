 import {
	LOGIN,
 	LOGOUT,
 	RECOVER_PASSWORD,
 	CHANGE_EMAIL,
 	CHANGE_PASSWORD,
 	REPLANISH_BALANCE,
 	REQUEST_LOGIN_IN,
 	SET_USER_TO_COOKIES,
 	REQUEST_IN_PERSONAL_ROOM,
 	SUBSCRIBE,
 	CHANGE_USER_AVATAR
 } from './../constants/account';
import { cookiesHandler } from './../constants/pureFunctions';

export const initAccountState = {
	username: '',
	password: '',
	isLogged: false,
	uuid: "",
	message: '',
	registerMessage: '',
	changeEmailMessage: '',
	changePasswordMessage: '',
	subscribeMessage: '',
	replanishBalanceMessage: '',
	recoverPasswordMessage: '',
	isRequesting: false,
};


const account = (
	state = initAccountState,
	action
) => {
	switch (action.type) {
		case REQUEST_LOGIN_IN:
			return {
				...state,
				isLogining: true
			};
		case LOGIN:
			return {
				...state,
				...action,
				isLogining: false
			};
		case LOGOUT:
			cookiesHandler.clearCookies();

			return {
				...initAccountState
			};
		case REQUEST_IN_PERSONAL_ROOM:
			return {
				...state,
				isRequesting: true
			};
		case RECOVER_PASSWORD:
			return {
				...state,
				recoverPasswordMessage: action.recoverPasswordMessage,
				isRequesting: false
			};
		case CHANGE_EMAIL:
			return {
				...state,
				userData: {
					...state.userData,
					email: action.email
				},
				changeEmailMessage: action.changeEmailMessage,
				isRequesting: false

			};
		case CHANGE_PASSWORD:
			return {
				...state,
				password: action.password,
				changePasswordMessage: action.changePasswordMessage,
				isRequesting: false
			};
		case SUBSCRIBE:
			return {
				...state,
				subscribeMessage: action.subscribeMessage,
				isRequesting: false,
				userData: {
					...state.userData,
					...action.userData
				}

			};
		case REPLANISH_BALANCE:
			return {
				...state,
				replanishBalanceMessage: action.replanishBalanceMessage
			};
		case CHANGE_USER_AVATAR:
			return {
				...state,
				userData: {
					...state.userData,
					...action.userData
				}
			};
		case SET_USER_TO_COOKIES:
			/* Если пользователь удачно залогинился, то
			 * пароль и логин кэшируются.
			 * В action указан {
			 * 		username: string,
			 * 		password: string,
			 * }
			 * action.type не принимается внутри функции, но также передаётся
			 * в спецификацию объекта.
			 */
			cookiesHandler.setUsernameAndPasswordToCookies({...action});

			return state;
		default:
			return state;
	}
};

export default account;
