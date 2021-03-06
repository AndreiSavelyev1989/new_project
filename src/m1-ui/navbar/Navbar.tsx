import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import style from "./Navbar.module.css";
import {VscChromeClose, VscThreeBars} from "react-icons/all";
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
                        <VscThreeBars onClick={showSidebar}/>
                    </NavLink>
                </div>
                <nav className={sidebar ? `${style.navMenu} ${style.active}` : style.navMenu}>
                    <ul className={style.navMenuItems} onClick={showSidebar}>
                        <li className={style.navbarToggle}>
                            <NavLink to={"#"} className={style.menuBars}>
                                <VscChromeClose/>
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
    )
}