import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { cardsAPI } from '../../m3-dal/api';
import { AppRootStateType } from '../state/store';
import { setIsFetchingAC } from './auth-reducer';

const GET_CARDS = 'cards/GET-CARDS';
const SET_IS_FETCHING = 'cards/SET-IS-FETCHING';

type GetCardsType = {
  type: typeof GET_CARDS;
  packId: string;
  cards: Array<CardsType>;
};

type CardsType = {
  cardAnswer?: string;
  cardQuestion?: string;
  cardsPack_id: string;
  min?: number;
  max?: number;
  sortCards?: number;
  page?: number;
  pageCount?: number;
};

type SetIsFetchingCardsType = {
  type: typeof SET_IS_FETCHING;
};

type ActionsType = GetCardsType | SetIsFetchingCardsType;

type StateType = {
  cards: Array<CardsType> | [];
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
  state: StateType = initialState,
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

export const addCard = (cardsPackId: string): ThunkCardType => (dispatch) => {
  try {
    cardsAPI.addCard(cardsPackId).then(() => {
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
