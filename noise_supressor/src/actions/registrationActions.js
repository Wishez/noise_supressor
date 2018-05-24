import {
 	REGISTER,
 	REQUEST_REGISTRATION
} from './../constants/registrationTypes.js';
import {
	registerUrl
} from './../constants/conf.js';
import customAjaxRequest, { make_request } from './../constants/ajax.js';

// Показывает обработку регистрации.
const requestRegistration = () => ({
	type: REQUEST_REGISTRATION
});

const register = (
	isRegistered,
	registrationMessage
) => ({
	type: REGISTER,
  isRegistered,
	registrationMessage
});



export const tryRegisterUser = data => dispatch => {
	dispatch(requestRegistration());

	customAjaxRequest({
		url: registerUrl,
		data: data,
		type: 'POST',
		processData: true,
		cache: true
	});

	return make_request(
		resp => {
			// Сервер возвращает Вы успешно прошли регистрацию, если пользователь успешно зарегистрировался.
			// В остальных случаях он возвращает другое сообщение.
			dispatch(register(resp.is_registered, resp.message));
		},
		(xhr, errmsg, err) => {
			dispatch(register(false, 'Внутренняя ошибка сервера'));
		}
	);
}
