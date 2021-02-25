import React, { useEffect, useState } from 'react';
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
import style from './../../../assets/style/Common.module.css';
import ModalContainer from './ModalContainer';
import { useFormik } from 'formik';
import CommonButton from '../../../common/c2-CommonButton/CommonButton';
import CommonInput from '../../../common/c1-CommonInput/CommonInput';
import useComponentVisible from './useComponentVisible';

type FormikErrorType = {
  question?: string;
  answer?: string;
};

export const Cards = () => {
  const { cards, isFetching } = useSelector<AppRootStateType, StateCardsType>(
    (state) => state.cards
  );
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { cardsPackId } = useParams<Record<string, string>>();

  useEffect(() => {
    dispatch(getCardsByPackId(cardsPackId));
  }, [dispatch, cardsPackId]);

  const hideModal = () => {
    setIsShowModal(false);
  };

  const fieldsWithCards = cards.map((card: CardsType) => {
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

  const formik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {};

      if (!values.question) {
        errors.question = 'Required';
      }
      if (!values.answer) {
        errors.answer = 'Required';
      }
      return errors;
    },

    onSubmit: (values) => {
      dispatch(addCard(cardsPackId, values.question, values.answer));
      values.question = '';
      values.answer = '';
      setIsShowModal(false);
    },
  });

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

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
                <button
                  onClick={() => {
                    setIsShowModal(true);
                    setIsComponentVisible(true);
                  }}
                >
                  Add
                </button>
              </td>
            </tr>
          </thead>
          <tbody>{fieldsWithCards}</tbody>
        </table>
      )}
      <div className={s.modal} ref={ref}>
        {isComponentVisible && (
          <ModalContainer
            show={isShowModal}
            closeCB={hideModal}
          >
            <div className={style.commonContainer}>
              <h2 className={style.title}>Add Card</h2>
              <form className={style.formBlock} onSubmit={formik.handleSubmit}>
                <CommonInput
                  type={'text'}
                  label={'question'}
                  formikFieldsProps={{ ...formik.getFieldProps('question') }}
                />

                {formik.touched.question && formik.errors.question ? (
                  <div className={style.registrationError}>
                    {formik.errors.question}
                  </div>
                ) : null}
                <CommonInput
                  type={'text'}
                  label={'answer'}
                  formikFieldsProps={{ ...formik.getFieldProps('answer') }}
                />
                {formik.touched.answer && formik.errors.answer ? (
                  <div className={style.registrationError}>
                    {formik.errors.answer}
                  </div>
                ) : null}
                <CommonButton type={'submit'} name={'Add card'} />
              </form>
            </div>
          </ModalContainer>
        )}
      </div>
    </>
  );
};