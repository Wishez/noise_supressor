import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react';
import BaseButton from './BaseButton'
import RenderController from './RenderController';

import {
	required,
 	email
} from './../constants/validation.js';


const RecoverPasswordForm = ({
	submitRegistrationForm,
	handleSubmit,
	registerMessage,
	openLoginForm,
  isRequesting,
  recoverPasswordMessage
}) => (
	<form id='recoverPasswordForm'
		onSubmit={handleSubmit(submitRegistrationForm.bind(this))}
		className='registrationForm margin-top_base'>
		 <Field component={RenderController}
			label="Email"
			autocomplete="email"
		 	name='email'
		 	type='email'
			validate={[required, email]}
			placeholder='Email'
			maxLength='150'
		 />
		 <div className='registrationFormButtons margin-top_base'>
			  {
          recoverPasswordMessage ?
            <span className='formError'>{rcoverPasswordMessage}</span>
            : ''
        }
  		 	<Button loading={isRequesting}
  		 		className='registrationFormButtons__submitButton  submit'
  		 	  content='Recover Password'
  		 	  size='medium'
  		 	/>
        <BaseButton
   		 	onClick={openLoginForm}
   		 	unstyled={true}>
   		 	 Log in
   		 </BaseButton>
        <BaseButton
   		 	onClick={openLoginForm}
   		 	unstyled={true}>
   		 	 Sign in
   		 </BaseButton>
		 </div>
	</form>
);


export default reduxForm({
	form: 'recoverPasswordForm'
})(RecoverPasswordForm);
