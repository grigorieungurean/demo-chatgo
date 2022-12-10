import React from "react";

import style from './name.module.css';

const Name = (props) => {
   return (
      <span className={style.name}>{ props.fullName }</span>
   );
};

export default Name;