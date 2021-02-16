import {Dispatch} from "redux";
import {cardsPackAPI} from "../../m3-dal/api";
import {setErrorAC} from "./auth-reducer";


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
export const createCardsPackAC = (newPack: CardPacksType) => ({type: 'pack/CREATE-PACKS', newPack} as const)

type ActionPacksType =
    | ReturnType<typeof setCardsPacksAC>
    | ReturnType<typeof createCardsPackAC>

//reducers
export const cardPackReducer = (state = initialState, action: ActionPacksType): CardsPackInitialStateType => {
    switch (action.type) {
        case "pack/SET-PACKS": {
            return {...state, cardsPack: action.setPack}
        }
        case "pack/CREATE-PACKS": {
            return {...state, cardsPack: [action.newPack, ...state.cardsPack]}
        }
        default:
            return state
    }
}

//thunks
export const getPacks = () => async (dispatch: Dispatch) => {
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

export const createNewPack = (cardPack: CardPacksType) => async (dispatch: Dispatch) => {
    try {
        await cardsPackAPI.createPack(cardPack)
        dispatch(createCardsPackAC(cardPack))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setErrorAC(error))
        console.log('Error: ', {...e})
        return console.log(error)
    }
}






