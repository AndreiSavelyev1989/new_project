import { Dispatch } from 'redux';
import { restoreAPI } from '../../m1-ui/pages/restore-password/restore-api';

const SUCCESS_SUBMIT = 'SUCCESS_SUBMIT';
const FAILED_SUBMIT = 'FAILED_SUBMIT';
const LOADING = 'LOADING';
const SET_EMAIL = 'SET_EMAIL';
const CLEAR_STATUS = 'CLEAR_STATUS';

const initialState = {
  currentEmail: null,
  error: null,
  status: null,
};

export const successSubmit = () => ({
  type: SUCCESS_SUBMIT,
});

export const failedSubmit = (error: any) => ({
  type: FAILED_SUBMIT,
  error,
});

export type restoreReducerType = any;

export const restoreReducer = (
  state: restoreReducerType = initialState,
  action: any
) => {
  switch (action.type) {
    case SUCCESS_SUBMIT: {
      return { ...state, currentEmail: null, status: 'success' };
    }
    case FAILED_SUBMIT: {
      return {
        ...state,
        currentEmail: null,
        error: action.error,
        status: 'fail',
      };
    }
    case LOADING: {
      return { ...state, status: 'loading' };
    }
    case SET_EMAIL: {
      return { ...state, currentEmail: action.email };
    }
    case CLEAR_STATUS: {
      return { ...state, status: null };
    }
    default:
      return state;
  }
};

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  email,
});

export const clearStatus = () => ({
  type: CLEAR_STATUS,
});

export const restorePassword = (email: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: LOADING });
    await restoreAPI.restorePassword(email);
    dispatch(successSubmit());
  } catch (e) {
    dispatch(failedSubmit(e.response.data.error));
  }
};

export const setNewPassword = (password: string, token: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: LOADING });
    await restoreAPI.setNewPassword(password, token);
    dispatch(successSubmit());
  } catch (e) {
    dispatch(failedSubmit(e.response.data.error));
  }
};
