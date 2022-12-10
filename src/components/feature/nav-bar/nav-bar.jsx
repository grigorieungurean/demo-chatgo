import React from "react";

import NavBarList from "./list/list";
import Avatar from "../../shared/avatar/avatar";
import { NavLink } from "react-router-dom";

import style from './nav-bar.module.css';

const NavBar = (props) => {
   return (
      <nav className={style.navbar}>
        <span className={style.logo}>
            <img src="./logo.svg" alt="Logo" />
        </span>
        <NavBarList />
        {props.isAuth
         ? <div className={style.auth}><Avatar size={30} /> <button onClick={props.logout} className={style.out}>Уйти</button></div>
         : <NavLink className={style.login} to="/login">Вход</NavLink>  }
      </nav>
   );
};

export default NavBar;