import {Dispatch} from "redux";
import {authApi, LoginDataType} from "../../m3-dal/api";


type initialStateType = {
    isLoggedIn: boolean
    error: string | null
    isInitialized:boolean
}
const intialState: initialStateType = {
    isLoggedIn: false,
    error:null,
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
            return {...state, isInitialized:action.isInitialized}
        }

        default:
            return state
    }
}
//actions
export const setIsInitialized = (isInitialized: boolean) => ({type: 'auth/INITIALIZED', isInitialized} as const)
export const setErrorAC = (error: string | null) => ({type:"login/ERROR", error} as const)
export const isLogedInAC = (value: boolean) => ({type: "login/SET-IS-LOGGED-IN", value} as const)
type ActionLoginType = ReturnType<typeof isLogedInAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setIsInitialized>


//thunk
export const loginTC = (data: LoginDataType) => (dispatch: Dispatch) => {
    authApi.login(data)
        .then(() => {
                dispatch(isLogedInAC(true))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setErrorAC(error))
            console.log('Error: ', {...e})
            return console.log(error)
        })
}

export const authMeTC = () => (dispatch: Dispatch) => {
    authApi.me()
        .then( (res) => {
                dispatch(setIsInitialized(true))

        })

}