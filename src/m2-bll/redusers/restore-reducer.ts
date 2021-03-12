import {Dispatch} from 'redux';
import {restoreAPI} from '../../m3-dal/api';
import {setIsFetchingAC} from "./auth-reducer";

const SUCCESS_SUBMIT = 'restore/SUCCESS_SUBMIT';
const FAILED_SUBMIT = 'restore/FAILED_SUBMIT';
const INIT = 'restore/INIT';
const SET_IS_PASSWORD_CHANGED = 'restore/SET_IS_PASSWORD_CHANGED';

type SuccessSubmitType = {
    type: typeof SUCCESS_SUBMIT;
    status: string;
};

type FailedSubmitType = {
    type: typeof FAILED_SUBMIT;
    error: string;
    status: string;
};

type InitType = {
    type: typeof INIT;
};

type SetIsPasswordChangedType = {
    type: typeof SET_IS_PASSWORD_CHANGED;
    isPasswordChanged: boolean;
};

type ActionsType =
    | SuccessSubmitType
    | FailedSubmitType
    | InitType
    | SetIsPasswordChangedType;

export type RestoreStateType = {
    currentEmail: null | string;
    error: null | string;
    status: null | string;
    isPasswordChanged: boolean;
};

export const successSubmit = (status: string): SuccessSubmitType => ({type: SUCCESS_SUBMIT, status,});
export const failedSubmit = (error: string, status: string): FailedSubmitType => ({
    type: FAILED_SUBMIT,
    error,
    status,
});
export const initRestorePage = (): InitType => ({type: INIT,});
export const setIsPasswordChanged = (isPasswordChanged: boolean): SetIsPasswordChangedType => ({
    type: SET_IS_PASSWORD_CHANGED,
    isPasswordChanged,
});

const initialState: RestoreStateType = {
    currentEmail: null,
    error: null,
    status: null,
    isPasswordChanged: false,
};

export const restoreReducer = (state: RestoreStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SUCCESS_SUBMIT: {
            return {...state, currentEmail: null, status: action.status};
        }
        case FAILED_SUBMIT: {
            return {
                ...state,
                currentEmail: null,
                error: action.error,
                status: action.status,
            };
        }
        case INIT: {
            return {...state, status: null, error: null};
        }
        case SET_IS_PASSWORD_CHANGED: {
            return {...state, isPasswordChanged: action.isPasswordChanged};
        }
        default:
            return state;
    }
};

export const restorePassword = (email: string | null) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetchingAC(true))
        await restoreAPI.restorePassword(email);
        dispatch(setIsFetchingAC(false))
        dispatch(successSubmit('New password send to your email'));
    } catch (e) {
        dispatch(setIsFetchingAC(false))
        dispatch(failedSubmit(e.response.data.error, 'Email not found'));
    }
};

export const setNewPassword = (password: string, token: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetchingAC(true))
        await restoreAPI.setNewPassword(password, token);
        dispatch(setIsFetchingAC(false))
        dispatch(successSubmit('Password has been changed'));
        dispatch(setIsPasswordChanged(true));
    } catch (e) {
        dispatch(setIsFetchingAC(false))
        dispatch(failedSubmit(e.response.data.error, 'Error'));
    }
};
