import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addCard,
  delCard,
  getCardsByPackId,
} from '../../../m2-bll/redusers/cards-reducer';
import { cardsAPI } from '../../../m3-dal/apiJS';
import s from './cards.module.css';

export const Cards = () => {
  //@ts-ignore
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsByPackId());
  }, []);
  console.log(cards);

  const delCardClick = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    const cardId = e.target.dataset.id;
    console.log(cardId);
    dispatch(delCard(cardId));
    return;
  };

  const addCardClick = (e: any) => {
    e.preventDefault();
    dispatch(addCard());
    return;
  };

  let baz;
  if (cards.length) {
    baz = cards.map((card: any) => {
      return (
        <tr key={card._id}>
          <td className={s['table__cell']}>{card.question}</td>
          <td className={s['table__cell']}>{card.answer}</td>
          <td className={s['table__cell']}>{card.grade}</td>
          <td className={s['table__cell']}>{card.updated}</td>
          <td className={s['table__cell']}>
            {card.questionImg}
          </td>
          <td className={s['table__cell']}>
            <button data-id={card._id} onClick={(e: any) => delCardClick(e)}>
              Del
            </button>
          </td>
          <td className={s['table__cell']}>
            <button data-id={card._id}>Update</button>
          </td>
        </tr>
      );
    });
  }

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
