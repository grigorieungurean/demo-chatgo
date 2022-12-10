import React from "react";
import { NavLink } from "react-router-dom";

import style from './friend.module.css';

const Friend = ({id, photo, name, status, followed, followingInProgress, unfollow, follow}) => {
   return (
      <div className={style.friend}>
         <NavLink to={"/profile/" + id}>
            <img className={style.photo} src={photo} width="50" height="50" alt="Картинка" />
         </NavLink>
         <div className={style.info}>
            <span className={style.fullName}>
               {name}
            </span>
            <span className={style.status}>
               {status}
            </span>
            <div className={style.location}>
               <span className={style.country}>
                  Казахстан,
               </span>
               <span className={style.city}>
                  г. Костанай
               </span>
            </div>
         </div>
         <div className={style.action}>
            {
               followed
                  ? <button disabled={followingInProgress.some(idU => idU === id)} className={style.btn} onClick={() => {
                     unfollow(id);
                     

                  }}>Удалить из друзей</button>
                  : <button disabled={followingInProgress.some(idU => idU === id)} className={style.btn} onClick={() => {
                     follow(id);

                  }}>Добавить в друзья</button>
            }
            <a href="/pop-up" className={style.link}>Написать</a>
         </div>
      </div>
   );
};

export default Friend;