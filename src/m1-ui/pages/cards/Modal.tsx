import s from './modal.module.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }: any) => {
  const mount = document.getElementById('portal-root');
  const el = document.createElement('div');
  el.className = s.modal;
  //@ts-ignore
  useEffect(() => {
    if (mount) {
      mount.appendChild(el);
      return () => mount.removeChild(el);
    }
  }, [el, mount]);

  return createPortal(children, el);
};

export default Modal;
