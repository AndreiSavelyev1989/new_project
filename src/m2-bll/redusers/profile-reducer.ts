import {authApi, LoginResponseType, meDataType} from "../../m3-dal/api";
import {ActionLoginType, setErrorAC, setIsFetchingAC} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../state/store";

const initialState: InitialProfileStateType = {
    profile: {
        name: "",
        avatar: "",
        _id: ""
    }
}

type InitialProfileStateType = {
    profile: LoginResponseType
}
export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_PROFILE":
            return {
                ...state,
                profile: {...action.payload}
            }
        default:
            return state
    }
}
type  ActionsType = ReturnType<typeof setProfileAC>

//actions
export const setProfileAC = (profile: LoginResponseType) => ({type: "SET_PROFILE", payload: profile} as const)

//thunks
type ThunkAuthType = ThunkAction<void, AppRootStateType, unknown, ActionLoginType>

export const updateMeDataTC = (userData: meDataType): ThunkAuthType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        const res = await authApi.updateMe(userData)
        dispatch(setProfileAC(res.data.updatedUser))
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