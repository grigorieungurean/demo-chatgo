import React from "react";

import style from './avatar.module.css';

import avatarDefault from '../../../assets/images/user.jpg';

const Avatar = ({path, size}) => (
   <img className={style.avatar} src={path ? path : avatarDefault} alt="Avatar" width={size} height={size} />
);

Avatar.defaultProps = {
   path: avatarDefault,
   size: 24,
};

export default Avatar;