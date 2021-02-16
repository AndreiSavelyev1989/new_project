import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {profileReducer} from "../redusers/profile-reducer";
import {registrationReducer} from "../redusers/registration-reducer";
import {authReducer} from "../redusers/auth-reducer";
import { restoreReducer } from '../redusers/restore-reducer';
import { cardsReducer } from '../redusers/cards-reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    registration: registrationReducer,
    auth: authReducer,
    restore: restoreReducer,
    cards: cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))