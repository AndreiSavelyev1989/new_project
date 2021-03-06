import {cardsPackAPI} from "../../m3-dal/api";
import {ActionLoginType, setErrorAC, setIsFetchingAC} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "../state/store";

export type CardsPackInitialStateType = {
    cardsPack: CardPacksType[]
    pageSize: number
    currentPage: number
    cardPacksTotalCount: number
    portionSize: number
    userPackId: string
    sort: undefined | string
}

const initialState = {
    cardsPack: [] as CardPacksType[],
    pageSize: 4,
    currentPage: 1,
    cardPacksTotalCount: 0,
    portionSize: 10,
    userPackId: '',
    sort: ''
}

//types

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
export const removePack = (packId: string) => ({type: "pack/REMOVE_PACK", packId} as const)
export const setPacksSort = (sort: string | undefined) => ({type: "pack/SET_PACKS_SORT", sort} as const)

type ActionPacksType =
    | ActionLoginType
    | ReturnType<typeof setCardsPacksAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setTotalCardPacksCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof removePack>
    | ReturnType<typeof setPacksSort>

type ThunkPacksType = ThunkAction<void, AppRootStateType, unknown, ActionPacksType>

//reducer
export const cardPackReducer = (state: CardsPackInitialStateType = initialState, action: ActionPacksType): CardsPackInitialStateType => {
    switch (action.type) {
        case "pack/SET-PACKS":
            return {...state, cardsPack: action.setPack}

        case "pack/SET_TOTAL_CARD_PACKS_COUNT":
            return {
                ...state, cardPacksTotalCount: action.totalCardPacksCount
            }
        case "pack/SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.page
            }
        case "pack/REMOVE_PACK":
            return {
                ...state,
                cardsPack: state.cardsPack.filter(pack => pack._id !== action.packId)
            }
        case "pack/SET_PACKS_SORT":
            return  {
                ...state,
                sort: action.sort
            }
        default:
            return state
    }
}
//thunks
export const getPacks = (page: number | undefined, pageCount: number | undefined, sort: string | undefined): ThunkPacksType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        const res = await cardsPackAPI.getPacks(page, pageCount, sort)
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
    } finally {
        dispatch(setIsFetchingAC(false));
    }
};


export const createNewPack = (cardPack: CardPacksType, page?: number, pageCount?: number, sort?: string): ThunkPacksType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        await cardsPackAPI.createPack(cardPack)
        dispatch(setCurrentPage(1))
        dispatch(getPacks(page, pageCount, sort))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
        dispatch(setErrorAC(error))
        return console.log(error)
    } finally {
        dispatch(setIsFetchingAC(false));
    }
}

export const deleteCardPack = (id: string, page?: number, pageCount?: number): ThunkPacksType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true))
        await cardsPackAPI.deletePack(id)
        dispatch(removePack(id))
        // dispatch(getPacks(page, pageCount))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
        dispatch(setErrorAC(error))
        return console.log(error)
    } finally {
        dispatch(setIsFetchingAC(false));
    }
}

export const updateCardPack = (cardPack: CardPacksType, page?: number, pageCount?: number, sort?: string): ThunkPacksType => async (dispatch) => {
    try {
        dispatch(setIsFetchingAC(true));
        await cardsPackAPI.updatePack(cardPack)
        dispatch(setCurrentPage(1))
        dispatch(getPacks(page, pageCount, sort))
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log('Error: ', {...e})
        dispatch(setErrorAC(error))
        return console.log(error)
    } finally {
        dispatch(setIsFetchingAC(false));
    }
}








