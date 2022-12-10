import React from "react";
// import { Route } from "react-router-dom";
import Chat from "./chat/chat";
import Dialog from "./dialog/dialog";

import style from './dialogs.module.css';

const Dialogs = (props) => {
   const dialogsElements = props.dialogsPage.dialogs
      .map(chat => <Chat key={chat.id} fullName={chat.fullName} message={chat.lastMessage} dateTime={chat.time} id={chat.id} />);

   return (
      <main className={style.dialogs}>
         <div className={style.chats}>
            <h2 className={style.title}>Сообщения</h2>
            {dialogsElements}
         </div>
         <Dialog messages={props.dialogsPage.messages} updateNewMessageBody={props.updateNewMessageBody} sendMessage={props.sendMessage} newMessageBody={props.dialogsPage.newMessageBody} />
      </main>
   )
};

export default Dialogs;