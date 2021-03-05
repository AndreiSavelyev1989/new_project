import React, {ChangeEvent, useEffect, useState, KeyboardEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../../m2-bll/state/store';
import {PATH} from '../../routes/Routes';
import {initialAuthStateType, logoutTC} from '../../../m2-bll/redusers/auth-reducer';
import CommonButton from '../../../common/c2-CommonButton/CommonButton';
import style from './Profile.module.css';
import {Preloader} from "../../preloader/Preloader";
import {updateMeDataTC} from "../../../m2-bll/redusers/profile-reducer";
import commonAvatar from "./../../../assets/images/avatar.png"


export const Profile = () => {
    const dispatch = useDispatch();
    const {isLoggedIn, isFetching} = useSelector<AppRootStateType,
        initialAuthStateType>((state) => state.auth);
    const {name, avatar, _id} = useSelector((state: AppRootStateType) => state.profile.profile)
    const [editMode, setEditMode] = useState(false)
    const [userName, setUserName] = useState(name)
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {

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
        setIsShown(false)
        if (userName && avatar && _id) {
            dispatch(updateMeDataTC({
                avatar: avatar,
                name: userName,
                userId: _id
            }))
        }
    }

    const onEnterViewMode = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setEditMode(false)
            setIsShown(false)
            if (userName && avatar && _id) {
                dispatch(updateMeDataTC({
                    avatar: avatar,
                    name: userName,
                    userId: _id
                }))
            }
        }
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>;
    }

    return (
        //need to fix - hardcode avatar
        <div className={style.profileBlock}>
            <div>{avatar
                ? <img src={commonAvatar} alt="user-avatar"/>
                : avatar}
            </div>
            <div className={style.nameBlock}>
                <div className={isShown ? style.showText : style.hiddenText}>Double click to change name</div>
                {editMode
                    ? <input type='text'
                             className={style.editName}
                             onChange={onNameChangeHandler}
                             autoFocus
                             onBlur={activateViewMode}
                             onKeyPress={onEnterViewMode}
                             value={userName}/>
                    : <span
                        onDoubleClick={activateEditMode}
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        className={style.showName}
                    >{isFetching ? <Preloader/> : name}</span>
                }
            </div>
            <div>
                <CommonButton name={'logout'} onClick={logoutCallBack}/>
            </div>
        </div>
    );
};