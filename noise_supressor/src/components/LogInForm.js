import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "semantic-ui-react";
import RenderController from "./RenderController";
import { required } from "./../constants/validation.js";

const LogInForm = ({ submitLogInForm, handleSubmit, message, isLogining }) => (
  <form
    id="logInForm"
    onSubmit={handleSubmit(submitLogInForm.bind(this))}
    className="logInForm parent parent_column"
  >
    <Field
      component={RenderController}
			label="Username"
      name="username"
      type="text"
      block="logInFormController"
      validate={[required]}
      placeholder="shiningfinger"
      maxLength="75"
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
    />
    {message ? (
      <span className="logInFormController__error formErorr">{message}</span>
    ) : (
      ""
    )}
    <div className="logInFormButtons parent parent_row parent_h-between parent_v-centered parent_wrap margin-top_increased">
      <Button
        className="logInFormButtons__submitButton submit"
        content="Sign in"
        loading={isLogining}
        size="medium"
      />
      <span className="logInFormButtons__button logInFormButtons__button_name-forgotPassword font-weight_light">
        Forgot password?
      </span>
    </div>
  </form>
);

export default reduxForm({
  form: "logInForm"
})(LogInForm);
