import {Dispatch} from "redux";
import {loginApi, LoginDataType} from "../../m3-dal/api";


type initialStateType = {
    isLoggedIn: boolean
    error: string | null
}
const intialState: initialStateType = {
    isLoggedIn: false,
    error:null
}
//reducers
export const loginReducer = (state = intialState, action: ActionLoginType): initialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN": {
            return {...state, isLoggedIn: action.value}
        }
        case "login/ERROR": {
            return {...state, error: action.error}
        }

        default:
            return state
    }
}
//actions
export const setErrorAC = (error: string | null) => ({type:"login/ERROR", error} as const)
export const isLogedInAC = (value: boolean) => ({type: "login/SET-IS-LOGGED-IN", value} as const)
type ActionLoginType = ReturnType<typeof isLogedInAC> | ReturnType<typeof setErrorAC>


//thunk
export const loginTC = (data: LoginDataType) => (dispatch: Dispatch) => {
    loginApi.login(data)
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