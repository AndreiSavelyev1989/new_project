import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addCard,
  CardsType,
  getCardsByPackId,
  StateCardsType,
} from '../../../m2-bll/redusers/cards-reducer';
import { AppRootStateType } from '../../../m2-bll/state/store';
import { Preloader } from '../../preloader/Preloader';
import { Card } from './Card';
import s from './cards.module.css';

export const Cards = () => {
  const { cards, isFetching }  = useSelector<AppRootStateType, StateCardsType>((state) => state.cards);
  console.log(cards);
  const dispatch = useDispatch();
  const { cardsPackId } = useParams<Record<string, string>>();

  useEffect(() => {
    dispatch(getCardsByPackId(cardsPackId));
  }, [dispatch, cardsPackId]);

  const addCardClick = () => {
    dispatch(addCard(cardsPackId));
  };

  let fieldsWithCards = cards.map((card: CardsType) => {
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
      {isFetching ? (
        <Preloader />
      ) : (
        <table className={s['table']}>
          <thead>
            <tr className={s['table__row']}>
              <td className={s['table__cell']}>question</td>
              <td className={s['table__cell']}>answer</td>
              <td className={s['table__cell']}>Grade</td>
              <td className={s['table__cell']}>updated</td>
              <td className={s['table__cell']}>url</td>
              <td className={s['table__cell']}>
                <button onClick={addCardClick}>Add</button>
              </td>
            </tr>
          </thead>
          <tbody>{fieldsWithCards}</tbody>
        </table>
      )}
    </>
  );
};
