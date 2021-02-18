import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addCard,
  delCard,
  getCardsByPackId,
  updateCard,
} from '../../../m2-bll/redusers/cards-reducer';
import s from './cards.module.css';

export const Cards = () => {
  //@ts-ignore
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();
  const { cardsPackId } = useParams<Record<string, string>>();

  useEffect(() => {
    dispatch(getCardsByPackId(cardsPackId));
  }, []);
  console.log(cards);

  const delCardClick = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    const cardId = e.target.dataset.id;
    console.log(cardId);
    dispatch(delCard(cardId, cardsPackId));
  };

  const addCardClick = (e: any) => {
    e.preventDefault();
    dispatch(addCard(cardsPackId));
  };

  const updateCardClick = (e: any) => {
    e.preventDefault();
    const cardId = e.target.dataset.id;
    dispatch(updateCard(cardId, cardsPackId));
  }

  let baz;
  baz = cards.map((card: any) => {
    return (
      <tr key={card._id}>
        <td className={s['table__cell']}>{card.question}</td>
        <td className={s['table__cell']}>{card.answer}</td>
        <td className={s['table__cell']}>{card.grade}</td>
        <td className={s['table__cell']}>{card.updated}</td>
        <td className={s['table__cell']}>{card.questionImg}</td>
        <td className={s['table__cell']}>
          <button data-id={card._id} onClick={(e: any) => delCardClick(e)}>
            Del
          </button>
        </td>
        <td className={s['table__cell']}>
          <button data-id={card._id} onClick={(e: any) => updateCardClick(e)}>Update</button>
        </td>
      </tr>
    );
  });

  return (
    <>
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
        <tbody>{baz}</tbody>
      </table>
    </>
  );
};
