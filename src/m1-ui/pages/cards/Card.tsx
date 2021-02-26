import s from './cards.module.css';
import style from './../../../assets/style/Common.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delCard, updateCard } from '../../../m2-bll/redusers/cards-reducer';
import { PATH } from '../../routes/Routes';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import useComponentVisible from './useComponentVisible';
import CommonInput from '../../../common/c1-CommonInput/CommonInput';
import CommonButton from '../../../common/c2-CommonButton/CommonButton';
import ModalContainer from './ModalContainer';
import { useFormik } from 'formik';
import { AppRootStateType } from '../../../m2-bll/state/store';


type PropsType = {
  id: string;
  question?: string;
  answer: string;
  updated?: string;
  questionImg?: string;
  cardsPackId: string;
  grade?: number;
  userId: string | undefined;
};

export const Card: React.FC<PropsType> = ({
  id,
  question,
  answer,
  grade,
  updated,
  questionImg,
  cardsPackId,
  userId,
}) => {
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const hideModal = () => {
    setIsShowModal(false);
  };
  const userAuthId = useSelector<AppRootStateType, string>(
    (state) => state.auth.authUserData.userId
  );
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(true);
  const delCardClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const cardId = e.currentTarget.dataset.id;
    if (cardId) {
      dispatch(delCard(cardId, cardsPackId));
    }
  };

  const formik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },

    onSubmit: (values, e) => {
      dispatch(updateCard(id, cardsPackId, values.question, values.answer));
      values.question = '';
      values.answer = '';
      setIsShowModal(false);
    },
  });

  return (
    <>
      <tr key={id}>
        <td className={s['table__cell']}>{question}</td>
        <td className={s['table__cell']}>{answer}</td>
        <td className={s['table__cell']}>{grade}</td>
        <td className={s['table__cell']}>{updated}</td>
        <td className={s['table__cell']}>{questionImg}</td>
        <td className={s['table__cell']}>
          <button data-id={id} onClick={delCardClick} disabled={userId !== userAuthId}>
            Del
          </button>
        </td>
        <td className={s['table__cell']}>
          <button
            onClick={() => {
              setIsShowModal(true);
              setIsComponentVisible(true);
            }}
            disabled={userId !== userAuthId}
          >
            Update
          </button>
        </td>
      </tr>
      <div className={s.modal} ref={ref}>
        {isComponentVisible && (
          <ModalContainer show={isShowModal} closeCB={hideModal}>
            <div className={style.commonContainer}>
              <h2 className={style.title}>Update Card</h2>
              <form className={style.formBlock} onSubmit={formik.handleSubmit}>
                <CommonInput
                  type={'text'}
                  label={'question'}
                  formikFieldsProps={{ ...formik.getFieldProps('question') }}
                />
                <CommonInput
                  type={'text'}
                  label={'answer'}
                  formikFieldsProps={{ ...formik.getFieldProps('answer') }}
                />
                <CommonButton type={'submit'} name={'Update Card'} />
              </form>
            </div>
          </ModalContainer>
        )}
      </div>
    </>
  );
};
