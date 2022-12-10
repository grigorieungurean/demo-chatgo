import React from "react";

import style from './date.module.css';

const DateTime = (props) => {
   return (
      <span className={style.date}>{ props.dateTime }</span>
   );
};

export default DateTime;