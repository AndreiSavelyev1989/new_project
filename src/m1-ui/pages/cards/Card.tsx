import s from './cards.module.css';
import { useDispatch } from 'react-redux';
import { delCard, updateCard } from '../../../m2-bll/redusers/cards-reducer';
import {PATH} from "../../routes/Routes";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    id: string;
    question?: string;
    answer: string;
    updated?: string;
    questionImg?: string;
    cardsPackId: string;
    grade?: number;
};

export const Card: React.FC<PropsType> = ({
                                              id,
                                              question,
                                              answer,
                                              grade,
                                              updated,
                                              questionImg,
                                              cardsPackId,
                                          }) => {
    const dispatch = useDispatch();


  const delCardClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const cardId = e.currentTarget.dataset.id;
    if (cardId) {
      dispatch(delCard(cardId, cardsPackId));
    }
  };

  const updateCardClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const cardId = e.currentTarget.dataset.id;
    if (cardId) {
      dispatch(updateCard(cardId, cardsPackId));
    }
  };
  return (
    <tr key={id}>
      <td className={s['table__cell']}>{question}</td>
      <td className={s['table__cell']}>{answer}</td>
      <td className={s['table__cell']}>{grade}</td>
      <td className={s['table__cell']}>{updated}</td>
      <td className={s['table__cell']}>{questionImg}</td>
      <td className={s['table__cell']}>
        <button data-id={id} onClick={delCardClick}>
          Del
        </button>
          <NavLink to={PATH.LEARN + '/' + id}>learn</NavLink>
      </td>
      <td className={s['table__cell']}>
        <button data-id={id} onClick={updateCardClick}>
          Update
        </button>
      </td>
    </tr>
  );
};
