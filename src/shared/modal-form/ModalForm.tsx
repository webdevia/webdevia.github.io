import React, { ReactNode, MouseEvent } from 'react';
import cn from 'clsx';
import s from './ModalForm.module.scss';

type ModalFormProps = {
  visible: boolean;
  children: ReactNode;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const ModalForm = ({ visible = true, onClose, children }: ModalFormProps) => {
  return (
    <div id="myModal" className={cn(s.modal, { [s['modal-hide']]: !visible })}>
      <div className={s['modal-content']}>
        <span className={s.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
