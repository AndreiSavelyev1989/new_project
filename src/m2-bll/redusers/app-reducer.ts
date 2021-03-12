import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../state/store";
import {authMeTC} from "./auth-reducer";

export type AppStateType = {
    isInitialized: boolean

}

const initialState: AppStateType = {
    isInitialized: false,
}

//actions
export type ActionsAppType = ReturnType<typeof initializedSuccess>


export const appReducer = (state: AppStateType = initialState, action: ActionsAppType) => {
    switch (action.type) {
        case "app/INITIALIZED_SUCCESS":
            return {
                ...state,
                isInitialized: action.isInitialized
            }
        default:
            return state
    }
}

export const initializedSuccess = (isInitialized: boolean) => ({
    type: "app/INITIALIZED_SUCCESS",
    isInitialized
} as const)


//thunks
type ThunkAuthType = ThunkAction<void, AppRootStateType, unknown, ActionsAppType>
export const initializeApp = (): ThunkAuthType => (dispatch) => {
    let promise = dispatch(authMeTC())
// @ts-ignore
    promise.then(() => {
        dispatch(initializedSuccess(true))
    })
}