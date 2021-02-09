import React from 'react';
import CSS from 'csstype';
import {
  setEmail,
  restorePassword,
  restoreReducerType,
} from '../../../m2-bll/redusers/restore-reducer';
import { useDispatch, useSelector } from 'react-redux';

const formStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column' as 'column',
};

const labelStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
};

const buttonStyle: CSS.Properties = {
  alignSelf: 'center',
};

export const RestorePassword = () => {
  const dispatch = useDispatch();
  const { status, currentEmail } = useSelector<restoreReducerType, any>(
    (state) => state.restore
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(restorePassword(currentEmail));
        }}
        style={formStyle}
      >
        <label style={labelStyle} htmlFor="email">
          <span>Your email</span>
          <input
            onChange={(e) => dispatch(setEmail(e.target.value))}
            type="email"
            name="email"
            id="email"
            required
            autoFocus
          />
        </label>
        <button style={buttonStyle} type="submit">
          Send request
        </button>
      </form>
      {status === 'loading' ? <div>Loading...</div> : ''}
      {status === 'success' ? <div>We send message on your email</div> : ''}
      {status === 'fail' ? <div>Email is not found</div> : ''}
    </div>
  );
};
