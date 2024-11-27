import React, { ReactNode } from 'react';
import cn from 'clsx';
import s from './ModalForm.module.scss';

type ModalFormProps = {
  visible: boolean;
  children: ReactNode;
};

export const ModalForm = ({ visible = true, children }: ModalFormProps) => {
  return (
    <div id="myModal" className={cn(s.modal, { [s['modal-hide']]: !visible })}>
      <div className={s['modal-content']}>
        <span className={s.close}>&times;</span>
        {children}
      </div>
    </div>
  );
};
