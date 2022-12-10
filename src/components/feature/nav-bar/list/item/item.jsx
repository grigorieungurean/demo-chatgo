import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../../../../shared/icon/icon";

import style from './item.module.css';

const NavBarListItem = (props) => {
   return (
      <li className={style.item}>
      <NavLink className={style.link} activeClassName={style.activ} to={props.path}>
         <Icon name={props.name} />
      </NavLink>
      </li>
   );
};

export default NavBarListItem;