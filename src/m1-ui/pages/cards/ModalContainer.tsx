import React, { ReactChild, useEffect, useState } from 'react';
import Modal from './Modal';

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
        <Modal>
          <button onClick={closeCB}>X</button>
          {children}
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;
