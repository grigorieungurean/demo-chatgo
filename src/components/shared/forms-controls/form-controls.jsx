import React from "react";
import style from './form-controls.module.css';
import { Field } from "redux-form";

const FormControl = ({ input, meta: {touched, error}, children }) => {
  const hasError = touched && error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};


export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (<FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>);
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (<FormControl {...props} ><input {...input} {...restProps} /></FormControl>);
};

export const createField = (style, placeholder, name, validators, component, props = {}) => {
  return (
    <Field
      className={style}
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />
  );
};