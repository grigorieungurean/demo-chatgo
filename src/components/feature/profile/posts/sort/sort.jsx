import React from "react";
import Icon from "../../../../shared/icon/icon";

import style from './sort.module.css';

const ProfilePostsSort = () => {
   return (
      <section className={style.sort}>
         <ul className={style.list}>
            <li className={style.item}>
               <a href="/every" className={`${style.tab} ${style.activ}`}>
                  Все записи
               </a>
            </li>
            <li className={style.item}>
               <a href="/my" className={style.tab}>
                  Мои записи
               </a>
            </li>
         </ul>
         <Icon name="sort"/>
      </section>
   );
};

export default ProfilePostsSort;