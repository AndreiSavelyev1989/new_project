
import {authApi, LoginDataType} from "../../m3-dal/api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../state/store";

export type initialAuthStateType = {
    isLoggedIn: boolean
    error: string | null
    isFetching: boolean
    isInitialized: boolean
    authUserData: {
        name: string
        avatar: string
        userId: string
    }

}
const intialState: initialAuthStateType = {
    isLoggedIn: false,
    error: null,
    isFetching: false,
    isInitialized: false,
    authUserData: {
        name: "",
        avatar: "",
        userId: ""
    }
}

//reducers
export const authReducer = (state = intialState, action: ActionLoginType): initialAuthStateType => {
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
                    avatar: action.avatar,
                    userId: action.userId
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
export const setUserData = (name: string, avatar: string, userId: string) => ({type: 'auth/SET-USER-DATA', name, avatar, userId} as const)

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
        dispatch(setIsFetchingAC(true));
        await authApi.login(data);
        dispatch(isLogedInAC(true));
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setErrorAC(error));
        console.log('Error: ', {...e});
        return console.log(error);
    } finally {
        dispatch(setIsFetchingAC(false));
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

export const authMeTC = (): ThunkAuthType => async (dispatch, getState) => {
    try {
        dispatch(setIsFetchingAC(true));
        const res = await authApi.me();
        dispatch(setUserData(res.data.name, res.data.avatar, res.data._id))
        dispatch(setIsInitialized(true));
        dispatch(isLogedInAC(true));
    } finally {
        dispatch(setIsFetchingAC(false));
    }
}

export const updateMeDataTC = (name: string, avatar: string, userId: string): ThunkAuthType => async (dispatch, getState) => {
    try {
        dispatch(setIsFetchingAC(true));
        const res = await authApi.updateMe(name, avatar, userId)
        dispatch(setUserData(res.data.updatedUser.name, res.data.updatedUser.avatar, res.data._id))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setErrorAC(error))
        console.log('Error: ', {...e})
        return console.log(error)
    }
    finally {
        dispatch(setIsFetchingAC(false));
    }
}

