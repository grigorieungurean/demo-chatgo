import React from "react";

import style from './cover.module.css';

import coverDefault from '../../../../assets/images/cover-def.jpg';

const ProfileCover = (props) => {
   return (
      <span className={style.cover}>
         <img src={!props.path ? coverDefault : props.path} alt="Cover" />
      </span>
   );
};

ProfileCover.defaultProps = {
   path: coverDefault
};

export default ProfileCover;