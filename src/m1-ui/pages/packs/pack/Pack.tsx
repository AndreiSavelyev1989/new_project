import React, {useEffect} from "react";
import s from "../Packs.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {deleteCardPack, getPacks} from "../../../../m2-bll/redusers/pack-reducer";
import {AppRootStateType} from "../../../../m2-bll/state/store";


type PropsType = {
    name: string
    cardsCount: number | undefined
    updated: string | undefined
    url: string | undefined
    id: string | undefined
}


export const Pack: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()


    const onDeleteCardPackHandler = () => {
        if (props.id) {
            dispatch(deleteCardPack(props.id))
        }
    }


    return (
        <div className={s.table}>
            <div className={s.tableContainer}>
                <div className={s.tableItem}>{props.name}</div>
                <div className={s.tableItem}>{props.cardsCount}</div>
                <div className={s.tableItem}>{props.updated}</div>
                <div className={s.tableItem}>{props.url}</div>
                <div className={s.tableItem}>
                    <button onClick={onDeleteCardPackHandler}>del</button>
                </div>
                <div className={s.tableItem}>
                    <NavLink to={PATH.CARDS + '/' + props.id}>CARDS</NavLink>
                </div>

            </div>
        </div>
    )
}