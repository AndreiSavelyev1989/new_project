import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { cardsAPI } from '../../m3-dal/api';
import { AppRootStateType } from '../state/store';

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

type ActionsType = GetCardsType | SetIsFetchingCardsType;

export type StateCardsType = {
  cards: Array<CardsType>;
  options: {};
  isFetching: boolean;
};

type ThunkCardType = ThunkAction<void, AppRootStateType, unknown, ActionsType>;

export const setIsFetchingCardsAC = () =>
  ({ type: 'cards/SET-IS-FETCHING' } as const);

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
    default:
      return state;
  }
};

export const getCardsByPackId = (cardsPackId: string) => (
  dispatch: Dispatch
) => {
  try {
    dispatch(setIsFetchingCardsAC());
    cardsAPI.getCards(cardsPackId).then((res) => {
      dispatch(GetCards(cardsPackId, res.data.cards));
      dispatch(setIsFetchingCardsAC());
    });
  } catch (e) {
    console.log(e);
  }
};

export const delCard = (cardId: string, cardsPackId: string): ThunkCardType => (
  dispatch
) => {
  try {
    cardsAPI.delCard(cardId).then(() => {
      dispatch(getCardsByPackId(cardsPackId));
    });
  } catch (e) {
    console.log(e);
  }
};

export const addCard = (
  cardsPackId: string,
  question: string,
  answer: string
): ThunkCardType => (dispatch) => {
  try {
    cardsAPI.addCard(cardsPackId, question, answer).then(() => {
      dispatch(getCardsByPackId(cardsPackId));
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateCard = (
  cardId: string,
  cardsPackId: string
): ThunkCardType => (dispatch) => {
  try {
    cardsAPI.updateCard(cardId).then(() => {
      dispatch(getCardsByPackId(cardsPackId));
    });
  } catch (e) {
    console.log(e);
  }
};
