import React from "react";
import preloader from "./../../assets/images/preloader.svg";
import style from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <div className={style.preloaderContainer}>
            <div>Loading:</div>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}