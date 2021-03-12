import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from './m1-ui/navbar/Navbar';
import {Routes} from './m1-ui/routes/Routes';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./m2-bll/state/store";
import {initializeApp} from "./m2-bll/redusers/app-reducer";
import {Preloader} from "./m1-ui/preloader/Preloader";

export const App = () => {
    const dispatch = useDispatch()
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if(!isInitialized){
        return <Preloader/>
    }

    return (
        <>
            <Navbar/>
            <Routes/>
        </>
    );
};
