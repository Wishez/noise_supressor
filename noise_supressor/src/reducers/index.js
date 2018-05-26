import { combineReducers } from 'redux';
import user from './user';
import registration from './registration';
import account from './account';
import views from './views';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	user,
	form: formReducer,
	registration,
	account,
	views
});

export default rootReducer;
