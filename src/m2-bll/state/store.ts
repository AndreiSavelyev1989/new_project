import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {profileReducer} from "../redusers/profile-reducer";
import {registrationReducer} from "../redusers/registration-reducer";
import {authReducer} from "../redusers/auth-reducer";
import { restoreReducer } from '../redusers/restore-reducer';
import {cardPackReducer} from "../redusers/pack-reducer";
import { cardsReducer } from '../redusers/cards-reducer';
import {appReducer} from "../redusers/app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    registration: registrationReducer,
    auth: authReducer,
    restore: restoreReducer,
    packs: cardPackReducer,
    cards: cardsReducer
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppRootStateType = ReturnType<typeof rootReducer>