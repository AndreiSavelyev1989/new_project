import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={style.navbarBlock}>
            <NavLink to={PATH.PROFILE} activeClassName={style.active}>Profile</NavLink>
            <NavLink to={PATH.REGISTRATION} activeClassName={style.active}>Registration</NavLink>
            <NavLink to={PATH.RESTORE_PASSWORD} activeClassName={style.active}>Restore password</NavLink>
            <NavLink to={PATH.NEW_PASSWORD} activeClassName={style.active}>New password</NavLink>
            <NavLink to={PATH.LOGIN} activeClassName={style.active}>Login</NavLink>
            <NavLink to={PATH.PACKS} activeClassName={style.active}>Packs</NavLink>
            <NavLink to={PATH.LEARN} activeClassName={style.active}>Learn</NavLink>
            {/*<NavLink to={PATH.CARDS} activeClassName={style.active}>Cards</NavLink>*/}
            <NavLink to={PATH.TEST} activeClassName={style.active}>Test</NavLink>
        </div>
    )
}