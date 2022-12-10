import React from "react";
import { Field, reduxForm } from "redux-form";
import Name from "../../../shared/name/name";
import {Textarea} from "../../../shared/forms-controls/form-controls";
import { required, maxLengthCreator } from "../../../../utils/validators/validators";

import style from './dialog.module.css';
import Message from "./message/message";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit} className={style.form}>
         <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Напишите текс записи" className={style.text} />
         <button className={style.tweet}>Опубликовать</button>
      </form>
   );
};

const Dialog = (props) => {

   const addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
   };

   const messagesElements = props.messages.map(message => <Message key={message.id} fullName={message.fullName} message={message.message} dateTime={message.time} />);

   return (
      <div className={style.dialog}>
         <div className={style.header}>
            <h2 className={style.title}>
               Диалог
            </h2>
            <span className={style.interlocutor}>
               c <Name name="Елена Унгурян" />
            </span>
         </div>
         <div className={style.list}>
            {messagesElements}
         </div>
         <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
   );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialog;