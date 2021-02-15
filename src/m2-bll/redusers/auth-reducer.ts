import {Dispatch} from "redux";
import {authApi, LoginDataType} from "../../m3-dal/api";

export type initialStateType = {
    isLoggedIn: boolean
    error: string | null
    isFetching: boolean
    isInitialized: boolean
}
const intialState: initialStateType = {
    isLoggedIn: false,
    error: null,
    isFetching: false,
    isInitialized: false
}

//reducers
export const authReducer = (state = intialState, action: ActionLoginType): initialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN": {
            return {...state, isLoggedIn: action.value}
        }
        case "login/ERROR": {
            return {...state, error: action.error}
        }
        case "auth/INITIALIZED": {
            return {...state, isInitialized: action.isInitialized}
        }
        case "login/SET-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state
    }
}
//actions

export const setErrorAC = (error: string | null) => ({type: "login/ERROR", error} as const)
export const isLogedInAC = (value: boolean) => ({type: "login/SET-IS-LOGGED-IN", value} as const)
export const setIsFetchingAC = (isFetching: boolean) => ({type: "login/SET-IS-FETCHING", isFetching} as const)
export const setIsInitialized = (isInitialized: boolean) => ({type: 'auth/INITIALIZED', isInitialized} as const)

type ActionLoginType =
    | ReturnType<typeof isLogedInAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof setIsInitialized>

//thunk
export const loginTC = (data: LoginDataType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetchingAC(true))
        await authApi.login(data);
        dispatch(isLogedInAC(true))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setErrorAC(error))
        console.log('Error: ', {...e})
        return console.log(error)
    } finally {
        dispatch(setIsFetchingAC(false))
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        await authApi.logout();
        dispatch(isLogedInAC(false ));
    } finally {
        dispatch(setIsFetchingAC(false));
    }
}
export const authMeTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        await authApi.me();
        dispatch(setIsInitialized(true));
    } finally {
        dispatch(setIsFetchingAC(false));
    }
}