import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../../m2-bll/state/store';
import {PATH} from '../../routes/Routes';
import {authMeTC, initialAuthStateType, logoutTC, updateMeDataTC} from '../../../m2-bll/redusers/auth-reducer';
import CommonButton from '../../../common/c2-CommonButton/CommonButton';
import style from './Profile.module.css';
import avatar from './../../../assets/images/avatar.png'
import {Preloader} from "../../preloader/Preloader";


export const Profile = () => {
    const dispatch = useDispatch();
    const {isInitialized, isLoggedIn, authUserData, isFetching} = useSelector<AppRootStateType,
        initialAuthStateType>((state) => state.auth);
    const [editMode, setEditMode] = useState(false)
    const [userName, setUserName] = useState(authUserData.name)
    const [userAvatar, setUserAvatar] = useState(authUserData.avatar)

    useEffect(() => {
        if(!isInitialized){
            dispatch(authMeTC());
        }
    }, []);

    const logoutCallBack = () => {
        dispatch(logoutTC());
    };

    const onNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true);
        setUserName(userName);
    }

    const activateViewMode = () => {
        setEditMode(false)
        dispatch(updateMeDataTC(userName, userAvatar, authUserData.userId))
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>;
    }
    return (
        //need to fix - hardcode avatar
        <div className={style.profileBlock}>
            <div>{authUserData.avatar
                ? <img src={avatar} alt="user-avatar"/>
                : authUserData.avatar}
            </div>
            <div>
                {editMode
                    ? <input type='text'
                             onChange={onNameChangeHandler}
                             autoFocus
                             onBlur={activateViewMode}
                             value={userName}/>
                    : <span onDoubleClick={activateEditMode}>{isFetching ? <Preloader/> : authUserData.name}</span>
                }
            </div>
            <div>
                <CommonButton name={'logout'} onClick={logoutCallBack}/>
            </div>
        </div>
    );
};