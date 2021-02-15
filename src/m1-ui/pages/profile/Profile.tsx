import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppRootStateType } from '../../../m2-bll/state/store';
import { PATH } from '../../routes/Routes';
import {
  authMeTC,
  initialStateType,
  isLogedInAC,
  logoutTC,
} from '../../../m2-bll/redusers/auth-reducer';
import CommonButton from '../../../common/c2-CommonButton/CommonButton';

export const Profile = () => {
  const dispatch = useDispatch();
  const { isInitialized, isLoggedIn } = useSelector<
    AppRootStateType,
    initialStateType
  >((state) => state.auth);
  const [isFirstRendering, setIsFirstRendering] = useState(true);

  useEffect(() => {
    dispatch(authMeTC());
    if (isFirstRendering) {
      if (!isInitialized) {
        dispatch(authMeTC());
      }
      setIsFirstRendering(false);
    }
  }, []);
  //добавит && !isLoading
  if (!isLoggedIn) {
    return <Redirect to={PATH.LOGIN} />;
  }

  const logoutCallBack = () => {
    dispatch(logoutTC());

  };

  return (
    <div>
      <CommonButton name={'logout'} onClick={logoutCallBack} />
    </div>
  );
};
