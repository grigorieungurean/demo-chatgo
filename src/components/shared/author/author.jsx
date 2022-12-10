import React from "react";

import Avatar from "../avatar/avatar";
import Name from "../name/name";
import Date from "../date/date";

import style from './author.module.css';

const Author = (props) => {
   return (
      <div className={style.author}>
         <Avatar size={36} path={ props.avatar } />
         <div className={style.info}>
            <Name firstName={ props.authorFullName.firstName} lastName={ props.authorFullName.lastName } />
            <Date dateTime={ props.dateTime } />
         </div>
      </div>
   );
};

export default Author;