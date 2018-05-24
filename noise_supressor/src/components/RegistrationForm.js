import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Checkbox } from 'semantic-ui-react';
import BaseButton from './BaseButton'
import RenderController from './RenderController';

import {
	required,
 	login,
 	loginLength,
 	passwordLength,
 	password,
 	email
} from './../constants/validation.js';


const RegistrationForm = ({
	submitRegistrationForm,
	handleSubmit,
	allowRegister,
	knowRules,
	isRegistering,
	registrationMessage,
	openLoginForm
}) => (
	<form id='registrationForm'
		onSubmit={handleSubmit(submitRegistrationForm.bind(this))}
		className='registrationForm margin-top_base'>
		<Field component={RenderController}
			label="Username"
			autocomplete="name"
			name='username'
			type='text'
			block='registrationFormController'
			validate={[required, login, loginLength]}
			placeholder='Username'
			maxLength='24'
		 />
		 <Field component={RenderController}
			label="Password"
			autocomplete="password"
		 	name='password'
		 	type='password'
		 	block='registrationFormController'
			validate={[required, passwordLength, password]}
			placeholder='Password'
			maxLength='30'
		 />
		 <Field component={RenderController}
			label="Repeat Password"
			autocomplete="password"
		 	name='repeatedPassword'
		 	type='password'
		 	block='registrationFormController'
			validate={[required]}
			placeholder='Repeat password'
			maxLength='30'
		 />
		 <Field component={RenderController}
			label="Email"
			autocomplete="email"
		 	name='email'
		 	type='email'
		 	block='registrationFormController'
			validate={[required, email]}
			placeholder='Email'
			maxLength='150'
		 />

		 <p className='registrationFormController margin-top_small'>
			 <Checkbox onClick={allowRegister}
			 	className='registrationFormController__check'
			    label='You are agree for using your data?'
			    checked={knowRules} />
		 </p>
		 <div className='registrationFormButtons margin-top_base'>
				{
					registrationMessage ?
						<span className='formError'>{registrationMessage}</span>
						: ''
				}
			 	<Button disabled={!knowRules}
			 		loading={isRegistering}
			 		className='registrationFormButtons__submitButton  submit'
			 	  content='Sign up'
			 	  size='medium'
			 	/>
				<BaseButton
	 		 	onClick={openLoginForm}
	 		 	unstyled={true}>
	 		 	Log in
	 		 </BaseButton>
		 </div>
	</form>
);


export default reduxForm({
	form: 'registrationForm'
})(RegistrationForm);
