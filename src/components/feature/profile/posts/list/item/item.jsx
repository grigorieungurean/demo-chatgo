import React from "react";
import style from './item.module.css';

import Authour from '../../../../../shared/author/author';
import Icon from "../../../../../shared/icon/icon";

import * as contentImage from './content/images';

const ProfilePostsListItem = (props) => {
   return (
      <div className={style.item}>
         <header className={style.header}>
            <Authour avatar={ props.authorAvatar } authorFullName={ props.authorFullName } dateTime={ props.dateTime } />
            <span className={style.actionMenu}>
               <Icon name="action" />
            </span>
         </header>
         <p className={style.text}>
            { props.message }
         </p>
         { props.contentImageId ? <img src={ contentImage[`${props.contentImageId}`] } alt="Content" className={style.images} /> : false}
         <div className={style.socialAction}>
            <span className={style.heart}>
               <Icon name="heart" /> { props.like }
            </span>
            <span className={style.comment}>
               <Icon name="comment" /> { props.comment }
            </span>
            <span className={style.repost}>
               <Icon name="repost" /> { props.repost }
            </span>
            <span className={style.view}>
               <Icon name="view" /> { props.view }K
            </span>
         </div>
      </div>
   );
};

ProfilePostsListItem.defaultProps = {
   view: '76K'
};

export default ProfilePostsListItem;