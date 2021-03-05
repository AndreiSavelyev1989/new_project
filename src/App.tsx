import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from './m1-ui/navbar/Navbar';
import {Routes} from './m1-ui/routes/Routes';
import {useDispatch, useSelector} from "react-redux";
import {authMeTC} from "./m2-bll/redusers/auth-reducer";
import {AppRootStateType} from "./m2-bll/state/store";

export const App = () => {
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.payload.isInitialized)

    useEffect(() => {
        dispatch(authMeTC())
    }, [])

    if (!isInitialized) {

    }
    return (
        <>
            <Navbar/>
            <Routes/>
        </>
    );
};
