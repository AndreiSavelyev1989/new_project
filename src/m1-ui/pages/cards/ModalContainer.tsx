import React, { ReactChild } from 'react';
import s from './cards.module.css';

type PropsType = {
  show: boolean;
  closeCB: () => void;
  children?: Array<ReactChild> | ReactChild;
  onShow?: () => void;
};

const ModalContainer = ({ show, closeCB, children, onShow }: PropsType) => {
  return (
    <>
      {show && (
        <>
          <button className={s.btn} onClick={closeCB}>X</button>
          {children}
        </>
      )}
    </>
  );
};

export default ModalContainer;
