import React, { ReactNode, FormEventHandler } from 'react';
import s from './RegularForm.module.scss';

type RegularFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  title?: string;
};

export const RegularForm = ({ onSubmit, title, children }: RegularFormProps) => {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </form>
  );
};
