import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import {AppRootStateType} from "../../../m2-bll/state/store";
import {PATH} from "../../routes/Routes";
import {authMeTC} from "../../../m2-bll/redusers/auth-reducer";



export const Profile = () => {
    const dispatch = useDispatch()
    const isInitialized = useSelector <AppRootStateType, boolean>( state => state.auth.isInitialized)
    const [isFirstRendering, setIsFirstRendering]  = useState(true)

    useEffect(() => {
        if(isFirstRendering){
            if (!isInitialized){
                dispatch(authMeTC())
                console.log(isFirstRendering,isInitialized)
                setIsFirstRendering(false)
            }
        }

    },[isFirstRendering, setIsFirstRendering])
    //добавит && !isLoading
    if (!isInitialized && !isFirstRendering){
        console.log(isFirstRendering,isInitialized)
       return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div>
            Profile
        </div>
    )
}