import { Dispatch } from 'redux';
import { cardsAPI } from '../../m3-dal/api';

const GET_CARDS = 'cards/GET_CARDS';

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

type ActionsType = GetCardsType;

type StateType = {
  cards: Array<CardsType> | [];
  options: any;
};

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
};

export const cardsReducer = (
  state: StateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case 'cards/GET_CARDS': {
      return { ...state, cards: [...action.cards] };
    }
    default:
      return state;
  }
};

export const getCardsByPackId = (cardsPackId: string) => (
  dispatch: Dispatch
) => {
  try {
    cardsAPI.getCards(cardsPackId).then((res) => {
      dispatch(GetCards(cardsPackId, res.data.cards));
    });
  } catch (e) {
    console.log(e);
  }
};

export const delCard = (cardId: string, cardsPackId: string) => (
  dispatch: Dispatch
) => {
  try {
    cardsAPI.delCard(cardId).then(() => {
      //@ts-ignore
      dispatch(getCardsByPackId(cardsPackId));
    });
  } catch (e) {
    console.log(e);
  }
};

export const addCard = (cardsPackId: string) => (dispatch: Dispatch) => {
  try {
    cardsAPI.addCard(cardsPackId).then(() => {
      //@ts-ignore
      dispatch(getCardsByPackId(cardsPackId));
    });
  } catch (e) {
    console.log(e);
  }
};


export const updateCard = (cardId: string, cardsPackId: string) => (dispatch: Dispatch) => {
  try {
    cardsAPI.updateCard(cardId).then(() => {
      //@ts-ignore
      dispatch(getCardsByPackId(cardsPackId));
    });
  } catch (e) {
    console.log(e);
  }
};