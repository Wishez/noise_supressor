 import {
	REQUEST_REGISTRATION,
 	REGISTER
 } from './../constants/registrationTypes';


export const initAccountState = {
	registrationMessage: '',
	isRequesting: false,
	isRegistered: false
};


const registration = (
	state = initAccountState,
	action
) => {
	switch (action.type) {
    
		case REQUEST_REGISTRATION:
			return {
				...state,
				isRequesting: true
			};

		case REGISTER:
			return {
				...state,
				isRegistered: action.isRegistered,
				registrationMessage: action.registrationMessage,
				isRequesting: false
			};

		default:
			return state;
	}
};

export default registration;
