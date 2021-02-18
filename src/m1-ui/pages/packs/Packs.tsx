import React, {useEffect} from "react";
import s from "./Packs.module.css";
import {useDispatch, useSelector} from "react-redux";
import {CardPacksType, createNewPack, getPacks} from "../../../m2-bll/redusers/pack-reducer";
import {AppRootStateType} from "../../../m2-bll/state/store";
import {Pack} from "./pack/Pack";

export const Packs = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.packs.cardsPack)

    useEffect(() => {
        dispatch(getPacks())
    }, [])

    const mappedCards = cards.map(c => {
        console.log(c._id)
        return <Pack
            key={c._id}
            name={c.name}
            cardsCount={c.cardsCount}
            updated={c.updated}
            url={c.user_name}
            id={c._id}
        />
    })

    const onAddCardPackHandler = () => {
        dispatch(createNewPack({
            name: "new hardcode pack"
        }))
    }

    return (
        <div className={s.table}>
            <h1 className={s.title}>Packs</h1>
            <div className={s.tableContainer}>
                <div className={s.tableItem}>Pack name</div>
                <div className={s.tableItem}>Cards count</div>
                <div className={s.tableItem}>Updated</div>
                <div className={s.tableItem}>Url</div>
                <div className={s.tableItem}>
                    <button onClick={onAddCardPackHandler}>add</button>
                </div>
            </div>
            {mappedCards}
        </div>
    )
}