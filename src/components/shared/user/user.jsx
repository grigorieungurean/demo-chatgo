import React from "react";

import Avatar from "../avatar/avatar";
import Name from "../name/name";
import City from "../city/city";

import style from './user.module.css';

const User = (props) => {
   return (
      <div className={style.user}>
         <Avatar path={ props.avatar } size={36} />
         <div className={style.info}>
            <Name fullName={props.fullName} />
            <City location={ props.location } />
         </div>
      </div>
   );
};

export default User;