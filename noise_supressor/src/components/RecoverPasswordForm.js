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
			autoComplete="email"
		 	name='email'
		 	type='email'
			validate={[required, email]}
			placeholder='Email'
			maxLength='150',

		 />
		 <div className='registrationFormButtons margin-top_base'>
			  {
          recoverPasswordMessage ?
            <p className='formError'>{recoverPasswordMessage}</p>
            : ''
        }
  		 	<Button loading={isRequesting}
  		 		className='button_yellow shadow_dark submit'
  		 	  content='Recover Password'
  		 	  size='medium'
  		 	/>
		 </div>
	</form>
);


export default reduxForm({
	form: 'recoverPasswordForm'
})(RecoverPasswordForm);
