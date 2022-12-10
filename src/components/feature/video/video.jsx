import React from "react";

import style from './video.module.css';

const Video = () => {
   return (
      <main className={style.video}>
         <p className={style.title}>Мои видео</p>
         <p className={style.subtitle}>У вас нет добавленых видео</p>
      </main>
   );
};

export default Video;