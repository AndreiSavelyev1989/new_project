import {authApi, LoginDataType} from "../../m3-dal/api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../state/store";
import {setProfileAC} from "./profile-reducer";
import {setIsInitializedApp} from "./app-reducer";

export type initialAuthStateType = {
    isLoggedIn: boolean
    error: string | null
    isFetching: boolean
}
const initialState: initialAuthStateType = {
    isLoggedIn: false,
    error: null,
    isFetching: false,
}

//reducers
export const authReducer = (state = initialState, action: ActionLoginType): initialAuthStateType => {
    switch (action.type) {
        case "auth/SET-IS-LOGGED-IN": {
            return {...state, isLoggedIn: action.value}
        }
        case "auth/ERROR": {
            return {...state, error: action.error}
        }
        case "auth/SET-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}
//actions

export const setErrorAC = (error: string | null) => ({type: "auth/ERROR", error} as const)
export const isLogedInAC = (value: boolean) => ({type: "auth/SET-IS-LOGGED-IN", value} as const)
export const setIsFetchingAC = (isFetching: boolean) => ({type: "auth/SET-IS-FETCHING", isFetching} as const)

export type ActionLoginType =
    | ReturnType<typeof isLogedInAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof setProfileAC>
    | ReturnType<typeof setIsInitializedApp>

type ThunkAuthType = ThunkAction<void, AppRootStateType, unknown, ActionLoginType>
//thunk
export const loginTC = (data: LoginDataType): ThunkAuthType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        const res = await authApi.login(data);
        dispatch(setProfileAC(res.data))
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

export const authMeTC = (): ThunkAuthType => (dispatch) => {
    dispatch(setIsFetchingAC(true));
    authApi.me()
        .then(res => {
            dispatch(setProfileAC(res.data))
            dispatch(isLogedInAC(true));
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setErrorAC(error));
            console.log('Error: ', {...e});
            dispatch(isLogedInAC(false));
            return console.log(error);
        })
        .finally(() => {
            dispatch(setIsFetchingAC(false));
            dispatch(setIsInitializedApp(true))
        })
}
// export const authMeTC = (): ThunkAuthType => async (dispatch) => {
//     try {
//         dispatch(setIsFetchingAC(true));
//         const res = await authApi.me();
//         dispatch(setProfileAC(res.data))
//         dispatch(isLogedInAC(true));
//     }
//     catch (e) {
//         const error = e.response
//             ? e.response.data.error
//             : (e.message + ', more details in the console');
//         dispatch(setErrorAC(error));
//         console.log('Error: ', {...e});
//         return console.log(error);
//     }
//     finally {
//         dispatch(setIsFetchingAC(false));
//         dispatch(setIsInitializedApp(true))
//     }
// }



