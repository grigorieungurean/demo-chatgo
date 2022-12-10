import React from "react";

import icons from './icons.svg';

import style from './icon.module.css';

const Icon = ({name, color, size}) => (
   <svg className={style.icon} stroke={color} width={size} height={size} viewBox="0 0 24 24">
       <use href={`${icons}#icon-${name}`} />
   </svg>
);

Icon.defaultProps = {
   size: 20,
   color: '#515264',
};

export default Icon;