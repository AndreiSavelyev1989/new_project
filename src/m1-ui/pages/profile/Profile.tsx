import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../../m2-bll/state/store";
import {PATH} from "../../routes/Routes";
import {authMeTC, initialStateType, isLogedInAC, logoutTC} from "../../../m2-bll/redusers/auth-reducer";
import CommonButton from "../../../common/c2-CommonButton/CommonButton";


export const Profile = () => {
    const dispatch = useDispatch()
    const {isInitialized, isLoggedIn} = useSelector<AppRootStateType, initialStateType>(state => state.auth)
    const [isFirstRendering, setIsFirstRendering] = useState(true)

    useEffect(() => {
        if (isFirstRendering) {
            if (!isInitialized) {
                dispatch(authMeTC())
                console.log(isFirstRendering, isInitialized)
            }
            setIsFirstRendering(false)

        }
    }, [])
    //добавит && !isLoading
    if (!isInitialized && !isLoggedIn) {
        console.log(isInitialized, isFirstRendering)
        return <Redirect to={PATH.LOGIN}/>

    }

    const logoutCallBack = () => {
        dispatch(logoutTC())
    }

    return (
        <div>
            <CommonButton
                name={"logout"}
                onClick={logoutCallBack}
            />
        </div>
    )
}