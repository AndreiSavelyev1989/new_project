import React, {useEffect, useState} from 'react';
import s from './Packs.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {
    CardPacksType,
    CardsPackInitialStateType,
    createNewPack,
    getPacks,
    setCurrentPage,
    updateCardPack,
} from '../../../m2-bll/redusers/pack-reducer';
import {AppRootStateType} from '../../../m2-bll/state/store';
import {Pack} from './pack/Pack';
import {Preloader} from '../../preloader/Preloader';
import {Pagination} from '../../../common/c4-Pagination/Pagination';
import {authMeTC, initialAuthStateType} from '../../../m2-bll/redusers/auth-reducer';
import useComponentVisible from '../cards/useComponentVisible';
import ModalContainer from '../cards/ModalContainer';
import {useFormik} from 'formik';
import style from './../../../assets/style/Common.module.css';
import CommonInput from '../../../common/c1-CommonInput/CommonInput';
import CommonButton from '../../../common/c2-CommonButton/CommonButton';
import {Redirect} from 'react-router-dom';
import {PATH} from "../../routes/Routes";

type FormikErrorType = {
    packName?: string;
};

type Formik2ErrorType = {
    updatePackName?: string;
};

let packId: string | undefined = '';

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
    const {isFetching, isLoggedIn} = useSelector<AppRootStateType, initialAuthStateType>(
        (state) => state.auth
    );
    const userAuthId = useSelector<AppRootStateType, string>(
        (state) => state.auth.authUserData.userId
    );

    const onUpdate = () => {
        setIsShowModalDel(true);
        setIsComponentVisibleDel(true);
    };

    useEffect(() => {
        dispatch(getPacks(currentPage, pageSize));
    }, []);

    const getPackIdFromPackComponent = (id: string | undefined) => {
        packId = id;
    };

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
                onUpdate={onUpdate}
                cb={getPackIdFromPackComponent}
            />
        );
    });

    const onCurrentPage = (pageNumber: any) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(getPacks(pageNumber, pageSize));
    };

    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [isShowModalDel, setIsShowModalDel] = useState<boolean>(false);
    const hideModal = () => {
        setIsShowModal(false);
    };
    const hideModalDel = () => {
        setIsShowModalDel(false);
    };
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible,
    } = useComponentVisible(false);

    const {
        ref: ref2,
        isComponentVisible: isComponentVisible2,
        setIsComponentVisible: setIsComponentVisibleDel,
    } = useComponentVisible(false);

    const formik = useFormik({
        initialValues: {
            packName: '',
            updatePackName: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.packName) {
                errors.packName = 'Required';
            }
            return errors;
        },

        onSubmit: (values) => {
            dispatch(createNewPack({name: values.packName}));
            values.packName = '';
            setIsShowModal(false);
        },
    });
    const formik2 = useFormik({
        initialValues: {
            updatePackName: '',
        },
        validate: (values) => {
            const errors: Formik2ErrorType = {};

            if (!values.updatePackName) {
                errors.updatePackName = 'Required';
            }
            return errors;
        },

        onSubmit: (values, e) => {
            dispatch(updateCardPack({_id: packId, name: values.updatePackName}));
            values.updatePackName = '';
            setIsShowModalDel(false);
        },
    });

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

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
                {isFetching ? <Preloader/> : mappedPacks}
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
                                    formikFieldsProps={{...formik.getFieldProps('packName')}}
                                />

                                {formik.touched.packName && formik.errors.packName ? (
                                    <div className={style.registrationError}>
                                        {formik.errors.packName}
                                    </div>
                                ) : null}
                                <CommonButton type={'submit'} name={'Add pack'}/>
                            </form>
                        </div>
                    </ModalContainer>
                )}
            </div>

            <div className={s.modal} ref={ref2}>
                {isComponentVisible2 && (
                    <ModalContainer show={isShowModalDel} closeCB={hideModalDel}>
                        <div className={style.commonContainer}>
                            <h2 className={style.title}>Update Pack</h2>
                            <form className={style.formBlock} onSubmit={formik2.handleSubmit}>
                                <CommonInput
                                    type={'text'}
                                    label={'Pack Name'}
                                    formikFieldsProps={{
                                        ...formik2.getFieldProps('updatePackName'),
                                    }}
                                />

                                {formik2.touched.updatePackName &&
                                formik2.errors.updatePackName ? (
                                    <div className={style.registrationError}>
                                        {formik2.errors.updatePackName}
                                    </div>
                                ) : null}
                                <CommonButton type={'submit'} name={'Update pack'}/>
                            </form>
                        </div>
                    </ModalContainer>
                )}
            </div>
        </>
    );
};
