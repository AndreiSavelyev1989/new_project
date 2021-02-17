import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../../m2-bll/state/store';
import {PATH} from '../../routes/Routes';
import {authMeTC, initialStateType, logoutTC} from '../../../m2-bll/redusers/auth-reducer';
import CommonButton from '../../../common/c2-CommonButton/CommonButton';



export const Profile = () => {
    const dispatch = useDispatch();
    const {isInitialized, isLoggedIn} = useSelector<AppRootStateType,
        initialStateType>((state) => state.auth);


    useEffect(() => {
        if (!isInitialized) {
            dispatch(authMeTC());
        }
    }, []);
    //добавит && !isLoading
    const logoutCallBack = () => {
        dispatch(logoutTC());
    };

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>;
    }
    return (
        <div>
            <CommonButton name={'logout'} onClick={logoutCallBack}/>
        </div>
    );
};