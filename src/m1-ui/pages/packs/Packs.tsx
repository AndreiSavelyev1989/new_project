import React, {useEffect} from "react";
import s from "./Packs.module.css";
import {useDispatch, useSelector} from "react-redux";
import {
    CardPacksType,
    CardsPackInitialStateType,
    createNewPack,
    getPacks,
    setCurrentPage
} from "../../../m2-bll/redusers/pack-reducer";
import {AppRootStateType} from "../../../m2-bll/state/store";
import {Pack} from "./pack/Pack";
import {Preloader} from "../../preloader/Preloader";
import {Pagination} from "../../../common/c4-Pagination/Pagination";
import {authMeTC, initialAuthStateType} from "../../../m2-bll/redusers/auth-reducer";

export const Packs = () => {
    const dispatch = useDispatch()
    const packs = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.packs.cardsPack)
    const {cardPacksTotalCount, portionSize, currentPage, pageSize} = useSelector<AppRootStateType, CardsPackInitialStateType>(state => state.packs)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.auth.isFetching)
    const userAuthId = useSelector<AppRootStateType, string>(state => state.auth.authUserData.userId)
    const avatar = useSelector<AppRootStateType, string>(state => state.auth.authUserData.avatar)
    const name = useSelector<AppRootStateType, string>(state => state.auth.authUserData.name)

    useEffect(() => {
        dispatch(authMeTC())
        dispatch(getPacks(currentPage, pageSize))
    }, [])

    const mappedPacks = packs.map(p => {
        console.log(p._id)
        return <Pack
            key={p._id}
            name={p.name}
            cardsCount={p.cardsCount}
            updated={p.updated}
            url={p.user_name}
            id={p._id}
            user_id={p.user_id}
            userAuthId={userAuthId}
        />
    })

    const onCurrentPage = (pageNumber: any) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getPacks(pageNumber, pageSize))
    }

    const onAddCardPackHandler = () => {
        dispatch(createNewPack({
            name: "new hardcode pack"
        }))
    }

    return (
        <div className={s.table}>
            <h1 className={s.title}>Packs</h1>
            <Pagination
                totalItemsCount={cardPacksTotalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onCurrentPage={onCurrentPage}
                portionSize={portionSize}
                isFetching={isFetching}/>
            <div className={s.tableContainer}>
                <div className={s.tableItem}>Pack name</div>
                <div className={s.tableItem}>Cards count</div>
                <div className={s.tableItem}>Updated</div>
                <div className={s.tableItem}>Url</div>
                <div className={s.tableItem}>
                    <button onClick={onAddCardPackHandler}>add</button>
                </div>
                <div className={s.tableItem}>Go to link</div>

            </div>
            {isFetching ? <Preloader/> : mappedPacks}
        </div>
    )
}