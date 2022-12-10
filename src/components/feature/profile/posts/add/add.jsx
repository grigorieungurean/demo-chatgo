import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../../../utils/validators/validators";
import { Textarea } from "../../../../shared/forms-controls/form-controls";
import Icon from "../../../../shared/icon/icon";

import style from './add.module.css';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
   return (
      <form className={style.form} onSubmit={props.handleSubmit}>
         <Field validate={[required, maxLength10]} component={Textarea} name="newsPostText" placeholder="Напишите текс записи" className={style.text} />
         <button className={style.tweet}>Опубликовать</button>
      </form>
   );
};

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

const ProfilePostsAdd = (props) => {

   const onAddPost = (values) => {
      props.addPost(values.newsPostText);
   };

   return (
      <section className={style.add}>
         <header className={style.header}>
            <h2 className={style.title}>Добавить запись</h2>
            <Icon name="add" />
         </header>
         <AddNewPostFormRedux onSubmit={onAddPost} />
      </section>
   );
};

export default ProfilePostsAdd;