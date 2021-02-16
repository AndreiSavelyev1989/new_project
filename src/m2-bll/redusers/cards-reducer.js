import { cardsAPI } from '../../m3-dal/apiJS';

const initialState = {
  cards: [],
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

export const getCardsByPackId = (cardPackId) => (dispatch) => {
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

export const delCard = (cardId) => (dispatch) => {
  try {
    cardsAPI.delCard(cardId).then(() => {
      dispatch(getCardsByPackId());
    });
  } catch (e) {
    console.log(e);
  }
};

export const addCard = (cardPackId) => (dispatch) => {
  try {
    cardsAPI.addCard().then(() => {
      dispatch(getCardsByPackId());
    });
  } catch (e) {
    console.log(e);
  }
};