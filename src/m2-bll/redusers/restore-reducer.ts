import { Dispatch } from 'redux';
import { restoreAPI } from '../../m3-dal/api';

const SUCCESS_SUBMIT = 'restore/SUCCESS_SUBMIT';
const FAILED_SUBMIT = 'restore/FAILED_SUBMIT';
const LOADING = 'restore/LOADING';
const SET_EMAIL = 'restore/SET_EMAIL';
const CLEAR_STATUS = 'restore/CLEAR_STATUS';
const INIT = 'restore/INIT';

type SuccessSubmitType = {
  type: typeof SUCCESS_SUBMIT;
};

type FailedSubmitType = {
  type: typeof FAILED_SUBMIT;
  error: string;
};

type SetEmailType = {
  type: typeof SET_EMAIL;
  email: string;
};

type ClearStatusType = {
  type: typeof CLEAR_STATUS;
};

type LoadingType = {
  type: typeof LOADING;
};

type InitType = {
  type: typeof INIT;
};

type ActionsType =
  | SuccessSubmitType
  | FailedSubmitType
  | SetEmailType
  | ClearStatusType
  | LoadingType
  | InitType;

export type RestoreStateType = {
  currentEmail: null | string;
  error: null | string;
  status: null | string;
};

export const successSubmit = (): SuccessSubmitType => ({
  type: SUCCESS_SUBMIT,
});

export const failedSubmit = (error: string): FailedSubmitType => ({
  type: FAILED_SUBMIT,
  error,
});

export const setEmail = (email: string): SetEmailType => ({
  type: SET_EMAIL,
  email,
});

export const clearStatus = (): ClearStatusType => ({
  type: CLEAR_STATUS,
});

export const initRestorePage = (): InitType => ({
  type: INIT
})

const initialState: RestoreStateType = {
  currentEmail: null,
  error: null,
  status: null,
};

export const restoreReducer = (
  state: RestoreStateType = initialState,
  action: ActionsType
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
    case INIT: {
      return { ...state, status: null, error: null };
    }
    default:
      return state;
  }
};

export const restorePassword = (email: string | null) => async (
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
