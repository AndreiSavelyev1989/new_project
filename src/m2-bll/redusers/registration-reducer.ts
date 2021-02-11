import {Dispatch} from "redux";
import {registrationAPI, RegistrationParamsType} from "../../m3-dal/api";

const initialState = {
    isRegistered: false,
    error: null
}

type InitialStateType = {
    isRegistered: boolean
    error: null | string
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case "registration/SET-REGISTRATION":
            return {...state, isRegistered: action.value}
        case "registration/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

//actions
const setIsRegisteredAC = (value: boolean) => ({type: "registration/SET-REGISTRATION", value} as const)
const setErrorAC = (error: string | null) => ({type: "registration/SET-ERROR", error} as const)
//thunks
export const registrationTC = (data: RegistrationParamsType) => (dispatch: Dispatch<ActionsType>) => {
    registrationAPI.setRegistration(data)
        .then(res => {
            dispatch(setIsRegisteredAC(true))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log('Error: ', {...e})
            dispatch(setErrorAC(error))
        })
}

type ActionsType =
    | ReturnType<typeof setIsRegisteredAC>
    | ReturnType<typeof setErrorAC>