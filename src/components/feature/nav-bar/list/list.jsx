import React from "react";
import NavBarListItem from "./item/item";

import style from './list.module.css';

const NavBarList = () => {
   return (
      <ul className={style.list}>
         <NavBarListItem name="profile" path="/profile" />
         <NavBarListItem name="dialogs" path="/dialogs" />
         <NavBarListItem name="friends" path="/friends" />
         <NavBarListItem name="music" path="/music" />
         <NavBarListItem name="video" path="/video" />
      </ul>
   );
};

export default NavBarList;