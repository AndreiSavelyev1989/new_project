import React from "react";
import s from "../Packs.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../routes/Routes";

type PropsType = {
    name: string
    cardsCount: number | undefined
    updated: string | undefined
    url: string | undefined
    id:string | undefined
}


export const Pack: React.FC<PropsType> = (props) => {
    return (
        <div className={s.table}>
            <div className={s.tableContainer}>
                <div className={s.tableItem}>{props.name}</div>
                <div className={s.tableItem}>{props.cardsCount}</div>
                <div className={s.tableItem}>{props.updated}</div>
                <div className={s.tableItem}>{props.url}</div>
                <div className={s.tableItem}>
                </div>
                <NavLink to={PATH.CARDS + '/' + props.id}>CARDS</NavLink>
            </div>
        </div>
    )
}