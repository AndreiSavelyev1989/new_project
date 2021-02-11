import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/state/store";
import {loginTC} from "../../../m2-bll/redusers/login-reducer";
import {Redirect} from "react-router-dom";


export const Login = () => {

    const [email, setEmail] = useState("nya-admin@nya.nya")
    const [password, setPassword] = useState("1qazxcvBG")



    const dispatch = useDispatch() //разобраться с useDispatch
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppRootStateType, string | null>(state => state.login.error)

    const onClickHandler = () => {
        dispatch(loginTC({email, password}))
    }
    const ChangeEmailCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)

    }

    const ChangePasswordCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    if (isLoggedIn) {
        return <Redirect to={"/"}/>
    }


    return (
        <div className={"login"}>
            <div>{error ? error : null}</div>
            <form className={"login_form"}>
                <h1>Login Here</h1>
                <input type={"text"}
                       placeholder={"Email"}
                       value={email}
                       onChange={ChangeEmailCallBack}/>

                <input type={"password"}
                       placeholder={"Password"} value={password}
                       onChange={ChangePasswordCallBack}/>
                <button onClick={onClickHandler}>Enter</button>
            </form>

        </div>
    )
}