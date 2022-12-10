import React from "react";

import style from './music.module.css';

const Music = () => {
   return (
      <main className={style.music}>
         <p className={style.title}>Моя музыка</p>
         <p className={style.subtitle}>Оформи подписку за 0,99 $ и слушай  <br /> любимых исполнителей целый месяц</p>
         <button className={style.button}>Оформить</button>
      </main>
   );
};

export default Music;