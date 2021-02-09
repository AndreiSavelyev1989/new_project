import React from 'react';
import CSS from 'csstype';
import { useDispatch, useSelector } from 'react-redux';
import {
  failedSubmit,
  restoreReducerType,
  setNewPassword,
} from '../../../m2-bll/redusers/restore-reducer';
import { useParams } from 'react-router-dom';

const formStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  marginTop: '20px',
};

export const NewPassword = () => {
  const dispatch = useDispatch();
  const { resetPasswordToken }: any = useParams();
  const { status, error } = useSelector<restoreReducerType, any>(
    (state) => state.restore
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const pass1 = formData.get('password1');
    const pass2 = formData.get('password2');
    pass1 === pass2
      ? // @ts-ignore
        dispatch(setNewPassword(pass1, resetPasswordToken))
      : dispatch(failedSubmit('Not equal'));
  };
  return (
    <div>
      <form
        style={formStyle}
        name="newPasswordForm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input type="password" name="password1" placeholder="New password" />
        <input
          type="password"
          name="password2"
          placeholder="Repeat your new password"
        />
        <button type="submit">Save new password</button>
      </form>
      {status === 'fail' ? <div>{error}</div> : ''}
      {status === 'success' ? <div>YEAH!</div> : ''}
      {status === 'loading' ? <div>Loading...</div> : ''}
    </div>
  );
};
