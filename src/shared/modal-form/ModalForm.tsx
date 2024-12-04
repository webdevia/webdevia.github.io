import React, { ReactNode, MouseEvent } from 'react';
import s from './ModalForm.module.scss';

type ModalFormProps = {
  visible: boolean;
  children: ReactNode;
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const ModalForm = ({ visible = true, onClose, children }: ModalFormProps) =>
  !!visible && (
    <div className={s.modal}>
      <div className={s['modal-content']}>
        <span className={s.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
