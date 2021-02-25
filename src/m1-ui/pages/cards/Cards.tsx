import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {addCard, getCardsByPackId, setCurrentPage, StateCardsType,} from '../../../m2-bll/redusers/cards-reducer';
import {Preloader} from '../../preloader/Preloader';
import {Card} from './Card';
import s from './cards.module.css';
import {AppRootStateType} from "../../../m2-bll/state/store";
import {Pagination} from "../../../common/c4-Pagination/Pagination";

export const Cards = () => {
    //@ts-ignore
    const {cards} = useSelector((state) => state.cards);
    const {
        isFetching, cardsTotalCount,
        currentPage, pageSize, portionSize
    } =
        useSelector<AppRootStateType, StateCardsType>((state) => state.cards);

    const dispatch = useDispatch();
    const {cardsPackId} = useParams<Record<string, string>>();

    useEffect(() => {
        dispatch(getCardsByPackId(cardsPackId, currentPage, pageSize));
    }, []);

    const addCardClick = (e: any) => {
        dispatch(addCard(cardsPackId));
    };

    const onCurrentPage = (pageNumber: any) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getCardsByPackId(cardsPackId, currentPage, pageSize))
    }

    let fieldsWithCards = cards.map((card: any) => {
        return (
            <Card
                key={card._id}
                id={card._id}
                question={card.question}
                answer={card.answer}
                grade={card.grade}
                updated={card.updated}
                cardsPackId={cardsPackId}
                questionImg={card.questionImg}
            />
        );
    });

    return (
        <>
            <div className={s.cardsContainer}>
                <div className={s.paginationContainer}>
                    <Pagination
                        totalItemsCount={cardsTotalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onCurrentPage={onCurrentPage}
                        portionSize={portionSize}
                        isFetching={isFetching}
                    />
                </div>
                <table className={s['table']}>
                    <thead>
                    <tr className={s['table__row']}>
                        <td className={s['table__cell']}>question</td>
                        <td className={s['table__cell']}>answer</td>
                        <td className={s['table__cell']}>Grade</td>
                        <td className={s['table__cell']}>updated</td>
                        <td className={s['table__cell']}>url</td>
                        <td className={s['table__cell']}>
                            <button onClick={(e: any) => addCardClick(e)}>Add</button>
                        </td>
                    </tr>
                    </thead>
                    <tbody>{isFetching ? <Preloader/> : fieldsWithCards}</tbody>
                </table>
            </div>
        </>
    );
};
