import {ThunkAction} from 'redux-thunk';
import {cardsAPI} from '../../m3-dal/api';
import {AppRootStateType} from '../state/store';

const GET_CARDS = 'cards/GET-CARDS';
const SET_IS_FETCHING = 'cards/SET-IS-FETCHING';

type GetCardsType = {
  type: typeof GET_CARDS;
  packId: string;
  cards: Array<CardsType>;
};

export type CardsType = {
  answer: string;
  cardsPack_id: string;
  comments: string;
  created: string;
  grade: string | undefined;
  more_id: string;
  question: string;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
  questionImg?: string;
  __v: number;
  _id: string;
};

export type SetIsFetchingCardsType = {
  type: typeof SET_IS_FETCHING;
};

type ActionsType =
  | GetCardsType
  | SetIsFetchingCardsType
  | ReturnType<typeof setTotalCardsCount>
  | ReturnType<typeof setCurrentPage>;

export type StateCardsType = {
  cards: Array<CardsType>;
  options: {};
  isFetching: boolean;
  cardsTotalCount: number;
  pageSize: number;
  currentPage: number;
  portionSize: number;
};

type ThunkCardType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;

export const setIsFetchingCardsAC = () =>
  ({ type: 'cards/SET-IS-FETCHING' } as const);
export const setTotalCardsCount = (totalCardsCount: number) =>
  ({
    type: 'SET_TOTAL_CARDS_COUNT',
    totalCardsCount,
  } as const);
export const setCurrentPage = (page: number) =>
  ({ type: 'SET_CURRENT_PAGE', page } as const);

export const GetCards = (
  packId: string,
  cards: Array<CardsType>
): GetCardsType => ({
  type: GET_CARDS,
  packId,
  cards,
});

const initialState = {
  cards: [],
  options: {},
  isFetching: false,
  cardsTotalCount: 0,
  pageSize: 5,
  currentPage: 1,
  portionSize: 4,
};

export const cardsReducer = (
  state: StateCardsType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case GET_CARDS: {
      return { ...state, cards: [...action.cards] };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: !state.isFetching };
    }
    case 'SET_TOTAL_CARDS_COUNT':
      return {
        ...state,
        cardsTotalCount: action.totalCardsCount,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
};

export const getCardsByPackId = (
  cardsPackId: string,
  page: number | undefined,
  pageCount: number | undefined
): ThunkCardType => (dispatch) => {
  try {
    dispatch(setIsFetchingCardsAC());
    cardsAPI.getCards(cardsPackId, page, pageCount).then((res) => {
      dispatch(GetCards(cardsPackId, res.data.cards));
      dispatch(setTotalCardsCount(res.data.cardsTotalCount));
      dispatch(setIsFetchingCardsAC());
    });
  } catch (e) {
    console.log(e);
  }
};

export const delCard = (
  cardId: string,
  cardsPackId: string,
  page?: number,
  pageCount?: number
): ThunkCardType => (dispatch) => {
  try {
    cardsAPI.delCard(cardId).then(() => {
      dispatch(getCardsByPackId(cardsPackId, page, pageCount));
    });
  } catch (e) {
    console.log(e);
  }
};

export const addCard = (
  cardsPackId: string,
  question: string,
  answer: string,
  page?: number,
  pageCount?: number
): ThunkCardType => (dispatch) => {
  try {
    cardsAPI.addCard(cardsPackId, question, answer).then(() => {
      dispatch(getCardsByPackId(cardsPackId, page, pageCount));
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateCard = (
  cardId: string,
  cardsPackId: string,
  page?: number,
  pageCount?: number
): ThunkCardType => (dispatch) => {
  try {
    cardsAPI.updateCard(cardId).then(() => {
      dispatch(getCardsByPackId(cardsPackId, page, pageCount));
    });
  } catch (e) {
    console.log(e);
  }
};
