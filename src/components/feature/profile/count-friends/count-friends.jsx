import React from "react";

import style from './count-friends.module.css';

import Icon from '../../../shared/icon/icon';
import Avatar from "../../../shared/avatar/avatar";

const ProfileCountFriends = (props) => {

   const friendsElements = [<Avatar />, <Avatar />, <Avatar />]

   return (
      <div className={style.count}>
         <Icon name="friends" />
         <span className={style.title}>
            <span className={style.num}>{props.friendsCounter}</span> друзей
         </span>
         <div className={style.avatars}>
            { friendsElements }
         </div>
      </div>
   );
};

export default ProfileCountFriends;