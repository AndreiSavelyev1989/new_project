import { Dispatch } from 'redux';
import { cardsAPI } from '../../m3-dal/apiJS';

type CardType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  rating: number;
  shots: number;
  type: string;
  user_id: string;
  created: string;
  updated: string;
  __v: number;
  _id: string;
};

type OptionsType = {
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};

const initialState = {
  cards: [] as CardType[],
  options: {
    page: '',
    pageCount: '',
    min: '',
    max: '',
  },
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CARDS': {
      return { ...state, cards: [...action.cards] };
    }
    default:
      return state;
  }
};

export const getCardsByPackId = (cardPackId: string) => (
  dispatch: Dispatch
) => {
  try {
    cardsAPI.getCards().then((res) => {
      dispatch({
        type: 'GET_CARDS',
        cards: res.data.cards,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const delCard = (cardId: string) => (dispatch: Dispatch) => {
  try {
    cardsAPI.delCard(cardId).then(() => {
      dispatch(getCardsByPackId());
    });
  } catch (e) {
    console.log(e);
  }
};

export const addCard = (cardPackId: string) => (dispatch: Dispatch) => {
  try {
    cardsAPI.addCard().then(() => {
      dispatch(getCardsByPackId());
    });
  } catch (e) {
    console.log(e);
  }
};
