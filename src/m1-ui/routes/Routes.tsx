import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Profile} from "../pages/profile/Profile";
import {Login} from "../pages/login/Login";
import {NewPassword} from "../pages/new-password/NewPassword";
import {Registration} from "../pages/registration/Registration";
import {RestorePassword} from "../pages/restore-password/RestorePassword";
import {Test} from "../pages/test/Test";
import {Error404} from "../pages/error404/Error404";
import style from "../../assets/style/Common.module.css"
import {Packs} from "../pages/packs/Packs";
import { Cards } from '../pages/cards/Cards';

export const PATH = {
    LOGIN: "/login",
    NEW_PASSWORD: "/new-password",
    PROFILE: "/profile",
    REGISTRATION: "/registration",
    RESTORE_PASSWORD: "/restore-password",
    TEST: "/test",
    PACKS: "/packs",
    CARDS: "/cards"
}

export const Routes = () => {
    return (
        <div className={style.commonBlock}>
            <Switch>
                <Route exact path={"/"} render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={`${PATH.NEW_PASSWORD}/:resetPasswordToken`} render={() => <NewPassword/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.RESTORE_PASSWORD} render={() => <RestorePassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
                <Route path={PATH.PACKS} render={() => <Packs/>}/>
                <Route path={`${PATH.CARDS}/:cardsPackId`} render={() => <Cards />}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}