import React from 'react';
import s from '../Packs.module.css';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../../routes/Routes';
import { useDispatch } from 'react-redux';
import { deleteCardPack } from '../../../../m2-bll/redusers/pack-reducer';

type PropsType = {
  name: string;
  cardsCount: number | undefined;
  updated: string | undefined;
  url: string | undefined;
  id: string | undefined;
  userAuthId: string | undefined;
  user_id: string | undefined;
  onUpdate: () => void;
  cb: (id: string | undefined) => void;
};

export const Pack: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();

  const onDeleteCardPackHandler = () => {
      if (props.id) {
          dispatch(deleteCardPack(props.id));
      }
  }
  const onClickUpdateHandler = () => {
    props.onUpdate();
    props.cb(props.id);
  };

  return (
    <div className={s.table}>
      <div className={s.tableContainer}>
        <div className={s.tableItem}>{props.name}</div>
        <div className={s.tableItem}>{props.cardsCount}</div>
        <div className={s.tableItem}>{props.updated}</div>
        <div className={s.tableItem}>{props.url}</div>
        <div className={s.tableItem}>
          <button
            onClick={onDeleteCardPackHandler}
            disabled={props.userAuthId !== props.user_id}
          >
            del
          </button>
          <button
            onClick={onClickUpdateHandler}
            disabled={props.userAuthId !== props.user_id}
          >
            update
          </button>
        </div>
        <div className={s.tableItem}>
          <NavLink to={PATH.CARDS + '/' + props.id}>Cards</NavLink>
          <NavLink to={PATH.LEARN + '/' + props.id}>Learn</NavLink>
        </div>
      </div>
    </div>
  );
};
