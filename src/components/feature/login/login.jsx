import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import style from "./login.module.css";
import styleError from "../../shared/forms-controls/form-controls.module.css";

import { login } from "../../../redux/auth-reducer";

import {required} from "../../../utils/validators/validators";

import { createField, Input } from "../../shared/forms-controls/form-controls";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.text}>
        {createField(style.input, "Email", "email", [required], Input)}
        {createField(style.input, "Password", "password", [required], Input, {type: "password"})}
      </div>
      <div className={style.check}>
        <label htmlFor="check">Запомнить данные для входа</label>
        {createField(style.checkbox, null, "rememberMe", null, Input, {type: "checkbox", id: "check"})}
      </div>
      {error && <div className={styleError.formSummaryError}>{error}</div>}
      <button className={style.button} >Войти</button>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm);

const Login = ({login, isAuth}) => {

  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={style.wrapLogin}>
      <div className={style.login}>
        <h1 className={style.title}>Введите свои данные</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {login}) (Login);