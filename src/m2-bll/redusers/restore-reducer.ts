import { Dispatch } from 'redux';
import { restoreAPI } from '../../m3-dal/api';

const SUCCESS_SUBMIT = 'restore/SUCCESS_SUBMIT';
const FAILED_SUBMIT = 'restore/FAILED_SUBMIT';
const LOADING = 'restore/LOADING';
const SET_EMAIL = 'restore/SET_EMAIL';
const CLEAR_STATUS = 'restore/CLEAR_STATUS';
const INIT = 'restore/INIT';
const SET_IS_PASSWORD_CHANGED = 'restore/SET_IS_PASSWORD_CHANGED';

type SuccessSubmitType = {
  type: typeof SUCCESS_SUBMIT;
  status: string;
};

type FailedSubmitType = {
  type: typeof FAILED_SUBMIT;
  error: string;
  status: string;
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

type SetIsPasswordChangedType = {
  type: typeof SET_IS_PASSWORD_CHANGED;
};

type ActionsType =
  | SuccessSubmitType
  | FailedSubmitType
  | SetEmailType
  | ClearStatusType
  | LoadingType
  | InitType
  | SetIsPasswordChangedType;

export type RestoreStateType = {
  currentEmail: null | string;
  error: null | string;
  status: null | string;
  isPasswordChanged: boolean;
};

export const successSubmit = (status: string): SuccessSubmitType => ({
  type: SUCCESS_SUBMIT,
  status,
});

export const failedSubmit = (
  error: string,
  status: string
): FailedSubmitType => ({
  type: FAILED_SUBMIT,
  error,
  status,
});

export const setEmail = (email: string): SetEmailType => ({
  type: SET_EMAIL,
  email,
});

export const clearStatus = (): ClearStatusType => ({
  type: CLEAR_STATUS,
});

export const initRestorePage = (): InitType => ({
  type: INIT,
});

export const setIsPasswordChanged = (): SetIsPasswordChangedType => ({
  type: SET_IS_PASSWORD_CHANGED,
});

const initialState: RestoreStateType = {
  currentEmail: null,
  error: null,
  status: null,
  isPasswordChanged: false,
};

export const restoreReducer = (
  state: RestoreStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case SUCCESS_SUBMIT: {
      return { ...state, currentEmail: null, status: action.status };
    }
    case FAILED_SUBMIT: {
      return {
        ...state,
        currentEmail: null,
        error: action.error,
        status: action.status,
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
    case SET_IS_PASSWORD_CHANGED: {
      return { ...state, isPasswordChanged: !state.isPasswordChanged };
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
    dispatch(successSubmit('New password send to ur email'));
  } catch (e) {
    dispatch(failedSubmit(e.response.data.error, 'Email not found'));
  }
};

export const setNewPassword = (password: string, token: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: LOADING });
    await restoreAPI.setNewPassword(password, token);
    dispatch(successSubmit('Password has been changed'));
    setTimeout(() => dispatch(setIsPasswordChanged()), 3000);
  } catch (e) {
    dispatch(failedSubmit(e.response.data.error, 'Error'));
  }
};
