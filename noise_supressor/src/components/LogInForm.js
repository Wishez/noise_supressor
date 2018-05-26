import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "semantic-ui-react";
import BaseButton from "./BaseButton";
import RenderController from "./RenderController";
import { required } from "./../constants/validation";

const LogInForm = ({ submitLogInForm, handleSubmit, message, isLogining, showRecoverPasswordForm }) => (
  <form
    id="logInForm"
    onSubmit={handleSubmit(submitLogInForm.bind(this))}
    className="logInForm parent parent_column margin-top_base"
  >
    <Field
      component={RenderController}
			label="Username"
      name="username"
      autoComplete="name"
      type="text"
      block="logInFormController"
      validate={[required]}
      placeholder="shiningfinger"
      maxLength="75"
      autoComplete="username"
    />
    <Field
      component={RenderController}
			label="Password"
      name="password"
      type="password"
      block="logInFormController"
      validate={[required]}
      placeholder="supressForMe2k18"
      maxLength="75"
      autoComplete="password"
    />
    {message ? (
      <p className="formErorr">{message}</p>
    ) : (
      ""
    )}
    <div className="logInFormButtons parent parent_row parent_h-between parent_v-centered parent_wrap margin-top_increased">
      <Button
        className="button_yellow submit"
        content="Sign in"
        loading={isLogining}
        size="medium"
      />
      <BaseButton
        onClick={showRecoverPasswordForm}
        unstyled>
        Forgot password?
      </BaseButton>
    </div>
  </form>
);

export default reduxForm({
  form: "logInForm"
})(LogInForm);
