import {authApi, LoginDataType} from "../../m3-dal/api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../state/store";

export type initialStateType = {
    isLoggedIn: boolean
    error: string | null
    isFetching: boolean
    isInitialized: boolean
    authUserData: {
        name: string
        avatar: string
        token:string
    }

}
const intialState: initialStateType = {
    isLoggedIn: false,
    error: null,
    isFetching: false,
    isInitialized: false,
    authUserData: {
        name: "",
        avatar: "",
        token:""
    }
}

//reducers
export const authReducer = (state = intialState, action: ActionLoginType): initialStateType => {
    switch (action.type) {
        case "auth/SET-IS-LOGGED-IN": {
            return {...state, isLoggedIn: action.value}
        }
        case "auth/ERROR": {
            return {...state, error: action.error}
        }
        case "auth/INITIALIZED": {
            return {...state, isInitialized: action.isInitialized}
        }
        case "auth/SET-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "auth/SET-USER-DATA": {
            return {
                ...state,
                authUserData: {
                    ...state.authUserData,
                    name: action.name,
                    avatar: action.avatar
                }

            }
        }
        default:
            return state
    }
}
//actions

export const setErrorAC = (error: string | null) => ({type: "auth/ERROR", error} as const)
export const isLogedInAC = (value: boolean) => ({type: "auth/SET-IS-LOGGED-IN", value} as const)
export const setIsFetchingAC = (isFetching: boolean) => ({type: "auth/SET-IS-FETCHING", isFetching} as const)
export const setIsInitialized = (isInitialized: boolean) => ({type: 'auth/INITIALIZED', isInitialized} as const)
export const setUserData = (name: string, avatar: string, token:string) => ({type: 'auth/SET-USER-DATA', name, avatar, token} as const)


export type ActionLoginType =
    | ReturnType<typeof isLogedInAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof setUserData>

type ThunkAuthType = ThunkAction<void, AppRootStateType, unknown, ActionLoginType>
//thunk
export const loginTC = (data: LoginDataType): ThunkAuthType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true))
        const  res = await authApi.login(data);
        console.log(res)
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

export const logoutTC = (): ThunkAuthType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        await authApi.logout();
        dispatch(isLogedInAC(false));
    } finally {
        dispatch(setIsFetchingAC(false));
    }
}

export const authMeTC = (): ThunkAuthType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        const res = await authApi.me();
        // console.log(res)
        dispatch(setIsInitialized(true));
        dispatch(isLogedInAC(true));
    } finally {
        dispatch(setIsFetchingAC(false));
    }
}

export const updateMeDataTC = (name?: string, avatar?: string, token?:string): ThunkAuthType => async (dispatch) => {
    try {
        const res = await authApi.updateMe(name, avatar, token)
        // console.log(res)
        dispatch(setUserData(res.data.updatedUser.name, res.data.updatedUser.avatar, res.data.updatedUser.token))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setErrorAC(error))
        console.log('Error: ', {...e})
        return console.log(error)
    }
}