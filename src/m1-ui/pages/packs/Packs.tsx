import React, { useEffect, useState } from 'react';
import s from './Packs.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardPacksType,
  CardsPackInitialStateType,
  createNewPack,
  getPacks,
  setCurrentPage,
} from '../../../m2-bll/redusers/pack-reducer';
import { AppRootStateType } from '../../../m2-bll/state/store';
import { Pack } from './pack/Pack';
import { Preloader } from '../../preloader/Preloader';
import { Pagination } from '../../../common/c4-Pagination/Pagination';
import { initialAuthStateType } from '../../../m2-bll/redusers/auth-reducer';
import useComponentVisible from '../cards/useComponentVisible';
import ModalContainer from '../cards/ModalContainer';
import { useFormik } from 'formik';
import style from './../../../assets/style/Common.module.css';
import CommonInput from '../../../common/c1-CommonInput/CommonInput';
import CommonButton from '../../../common/c2-CommonButton/CommonButton';

type FormikErrorType = {
  packName?: string;
};

export const Packs = () => {
  const dispatch = useDispatch();
  const packs = useSelector<AppRootStateType, Array<CardPacksType>>(
    (state) => state.packs.cardsPack
  );
  const {
    cardPacksTotalCount,
    portionSize,
    currentPage,
    pageSize,
  } = useSelector<AppRootStateType, CardsPackInitialStateType>(
    (state) => state.packs
  );
  const { isFetching } = useSelector<AppRootStateType, initialAuthStateType>(
    (state) => state.auth
  );
  const userAuthId = useSelector<AppRootStateType, string>(
    (state) => state.auth.authUserData.userId
  );

  useEffect(() => {
    dispatch(getPacks(currentPage, pageSize));
  }, []);

  const mappedPacks = packs.map((p) => {
    return (
      <Pack
        key={p._id}
        name={p.name}
        cardsCount={p.cardsCount}
        updated={p.updated}
        url={p.user_name}
        id={p._id}
        user_id={p.user_id}
        userAuthId={userAuthId}
      />
    );
  });

  const onCurrentPage = (pageNumber: any) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(getPacks(pageNumber, pageSize));
  };

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const hideModal = () => {
    setIsShowModal(false);
  };
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(true);

  const formik = useFormik({
    initialValues: {
      packName: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {};

      if (!values.packName) {
        errors.packName = 'Required';
      }
      return errors;
    },

    onSubmit: (values) => {
      dispatch(createNewPack({ name: values.packName }));
      values.packName = '';
      setIsShowModal(false);
    },
  });

  return (
    <>
      <div className={s.table}>
        <h1 className={s.title}>Packs</h1>
        <Pagination
          totalItemsCount={cardPacksTotalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onCurrentPage={onCurrentPage}
          portionSize={portionSize}
          isFetching={isFetching}
        />
        <div className={s.tableContainer}>
          <div className={s.tableItem}>Pack name</div>
          <div className={s.tableItem}>Cards count</div>
          <div className={s.tableItem}>Updated</div>
          <div className={s.tableItem}>Url</div>
          <div className={s.tableItem}>
            <button
              onClick={() => {
                setIsShowModal(true);
                setIsComponentVisible(true);
              }}
            >
              add
            </button>
          </div>
          <div className={s.tableItem}>Go to link</div>
        </div>
        {isFetching ? <Preloader /> : mappedPacks}
      </div>

      <div className={s.modal} ref={ref}>
        {isComponentVisible && (
          <ModalContainer show={isShowModal} closeCB={hideModal}>
            <div className={style.commonContainer}>
              <h2 className={style.title}>Add Pack</h2>
              <form className={style.formBlock} onSubmit={formik.handleSubmit}>
                <CommonInput
                  type={'text'}
                  label={'Pack Name'}
                  formikFieldsProps={{ ...formik.getFieldProps('packName') }}
                />

                {formik.touched.packName && formik.errors.packName ? (
                  <div className={style.registrationError}>
                    {formik.errors.packName}
                  </div>
                ) : null}
                <CommonButton type={'submit'} name={'Add pack'} />
              </form>
            </div>
          </ModalContainer>
        )}
      </div>
    </>
  );
};
