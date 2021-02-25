import {cardsPackAPI} from "../../m3-dal/api";
import {ActionLoginType, setErrorAC, setIsFetchingAC} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../state/store";


const initialState = {
    cardsPack: [] as CardPacksType[],
    pageSize: 5,
    currentPage: 1,
    cardPacksTotalCount: 0,
    portionSize: 10,
    userPackId: ''
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
export const setTotalCardPacksCount = (totalCardPacksCount: number) => ({
    type: "pack/SET_TOTAL_CARD_PACKS_COUNT",
    totalCardPacksCount
} as const)
export const setCurrentPage = (page: number) => ({type: "pack/SET_CURRENT_PAGE", page} as const)

type ActionPacksType =
    |ActionLoginType
    | ReturnType<typeof setCardsPacksAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setTotalCardPacksCount>
    | ReturnType<typeof setCurrentPage>

type ThunkPacksType = ThunkAction<void, AppRootStateType, unknown, ActionPacksType>
//reducers
export const cardPackReducer = (state = initialState, action: ActionPacksType): CardsPackInitialStateType => {
    switch (action.type) {
        case "pack/SET-PACKS": {
            return {...state, cardsPack: action.setPack}
        }
        case "pack/SET_TOTAL_CARD_PACKS_COUNT":
            return {
                ...state, cardPacksTotalCount: action.totalCardPacksCount
            }
        case "pack/SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.page
            }
        default:
            return state
    }
}

//thunks

export const getPacks = (page: number | undefined, pageCount: number | undefined):ThunkPacksType  => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        const res = await cardsPackAPI.getPacks(page, pageCount)
        dispatch(setCardsPacksAC(res.data.cardPacks))
        dispatch(setTotalCardPacksCount(res.data.cardPacksTotalCount))
        console.log(res)
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
};


export const createNewPack = (cardPack: CardPacksType, page?: number, pageCount?: number): ThunkPacksType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
       await cardsPackAPI.createPack(cardPack)
        dispatch(getPacks(page, pageCount))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
        dispatch(setErrorAC(error))
        return console.log(error)
    }
    finally {
        dispatch(setIsFetchingAC(false));
    }
}

export const deleteCardPack = (id:string, page?: number, pageCount?: number):ThunkPacksType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        await cardsPackAPI.deletePack(id)
        await dispatch(getPacks(page, pageCount))
    }
    catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
        dispatch(setErrorAC(error))
        return console.log(error)
    }
    finally {
        dispatch(setIsFetchingAC(false));
    }
}








