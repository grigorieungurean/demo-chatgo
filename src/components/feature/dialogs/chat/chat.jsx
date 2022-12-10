import React from "react";

import Avatar from '../../../shared/avatar/avatar';
import Name from '../../../shared/name/name';
import DateTime from '../../../shared/date/date';
import style from './chat.module.css';
import { NavLink } from "react-router-dom";

const Chat = (props) => {
   return (
      <NavLink className={style.chat} activeClassName={style.activ} to={`/dialogs/${props.id}`}>
         <Avatar path={props.senderAvatar} size={30} />
            <div className={style.content}>
               <div className={style.info}>
                  <Name firstName={props.fullName.firstName} lastName={props.fullName.lastName} />
                  <DateTime dateTime={props.dateTime} />
               </div>
               <p className={style.message}>{ props.message }</p>
            </div>
      </NavLink>
   );
};

export default Chat;