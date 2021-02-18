import {cardsPackAPI} from "../../m3-dal/api";
import {setErrorAC} from "./auth-reducer";
import {ActionLoginType, setErrorAC} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../state/store";


const initialState = {
    cardsPack: [] as CardPacksType[]
}

//types
export type CardsPackInitialStateType = typeof initialState
export type CardPacksType = {
    _id?: string
    user_id?: string
    user_name?: string
    private?: boolean
    name: string
    path?: string
    grade?: number
    shots?: number
    cardsCount?: number | undefined
    type?: string
    rating?: number
    created?: string | undefined
    updated?: string
    more_id?: string
    __v?: number
}

//actions
export const setCardsPacksAC = (setPack: CardPacksType[]) => ({type: 'pack/SET-PACKS', setPack} as const)


type ActionPacksType =
    |ActionLoginType
    | ReturnType<typeof setCardsPacksAC>
    | ReturnType<typeof setErrorAC>

type ThunkPacksType = ThunkAction<void, AppRootStateType, unknown, ActionPacksType>
//reducers
export const cardPackReducer = (state = initialState, action: ActionPacksType): CardsPackInitialStateType => {
    switch (action.type) {
        case "pack/SET-PACKS": {
            return {...state, cardsPack: action.setPack}
        }
        default:
            return state
    }
}

//thunks

export const getPacks = ():ThunkPacksType  => async (dispatch) => {

    try {
        const res = await cardsPackAPI.getPacks()
        dispatch(setCardsPacksAC(res.data.cardPacks))
        console.log(res)
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setErrorAC(error))
        console.log('Error: ', {...e})
        return console.log(error)
    }
};


export const createNewPack = (cardPack: CardPacksType): ThunkPacksType => async (dispatch) => {
    try {
        await cardsPackAPI.createPack(cardPack)
        dispatch(getPacks())
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
        dispatch(setErrorAC(error))
        return console.log(error)
    }
}

export const deleteCardPack = (id:string):ThunkPacksType => async (dispatch) => {
    try {
        await cardsPackAPI.deletePack(id)
        await dispatch(getPacks())
    }
    catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
        dispatch(setErrorAC(error))
        return console.log(error)
    }
}








