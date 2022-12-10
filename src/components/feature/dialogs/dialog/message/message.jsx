import React from "react";
import Name from "../../../../shared/name/name";
import Avatar from '../../../../shared/avatar/avatar';
import DateTime from '../../../../shared/date/date';

import style from './message.module.css';

const Message = (props) => {
   return (
      <div className={style.message}>
         <Avatar path={props.senderAvatar} size={30} />
         <div className={style.content}>
            <div className={style.info}>
               <Name firstName={props.fullName.firstName} lastName={props.fullName.lastName} />
               <DateTime dateTime={props.dateTime} />
            </div>
            <p className={style.text}>{ props.message }</p>
         </div>
      </div>
   );
};

export default Message;