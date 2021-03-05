import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import style from "./Navbar.module.css";
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/all";
import {sidebarData} from "./SidebarData";
import {IconContext} from "react-icons";

export const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color: '#3aa251'}}>
                <div className={style.navbar}>
                    <NavLink to={'#'} className={style.menuBars}>
                        <FaBars onClick={showSidebar}/>
                    </NavLink>
                </div>
                <nav className={sidebar ? `${style.navMenu} ${style.active}` : style.navMenu}>
                    <ul className={style.navMenuItems} onClick={showSidebar}>
                        <li className={style.navbarToggle}>
                            <NavLink to={"#"} className={style.menuBars}>
                                <AiOutlineClose/>
                            </NavLink>
                        </li>
                        {sidebarData.map((item, index) => {
                            return (
                                <li key={index} className={style.navText}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
        // <div className={style.navbarBlock}>
        //         <NavLink to={PATH.PROFILE} activeClassName={style.active}>Profile</NavLink>
        //         <NavLink to={PATH.REGISTRATION} activeClassName={style.active}>Registration</NavLink>
        //         <NavLink to={PATH.RESTORE_PASSWORD} activeClassName={style.active}>Restore password</NavLink>
        //         <NavLink to={PATH.LOGIN} activeClassName={style.active}>Login</NavLink>
        //         <NavLink to={PATH.PACKS} activeClassName={style.active}>Packs</NavLink>
        // </div>
        // <nav className={style.burger}>
        //     <NavLink to="#" className={style.burger__button} id="burger-button" onClick={onShowMenu}>
        //         <span className={style.burger__button__icon}></span>
        //     </NavLink>
        //     <ul className={burger ? style.open : style.burger__menu}>
        //         <li><NavLink to={PATH.PROFILE} activeClassName={style.active}>Profile</NavLink></li>
        //         <li><NavLink to={PATH.REGISTRATION} activeClassName={style.active}>Registration</NavLink></li>
        //         <li><NavLink to={PATH.RESTORE_PASSWORD} activeClassName={style.active}>Restore password</NavLink></li>
        //         <li><NavLink to={PATH.LOGIN} activeClassName={style.active}>Login</NavLink></li>
        //         <li><NavLink to={PATH.PACKS} activeClassName={style.active}>Packs</NavLink></li>
        //     </ul>
        // </nav>
    )
}