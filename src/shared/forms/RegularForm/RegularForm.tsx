import React, { ReactNode, FormEventHandler } from 'react';
import s from './RegularForm.module.scss';

type RegularFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
};

const RegularForm = ({ onSubmit, children }: RegularFormProps) => {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

const Title = ({ children }: { children: ReactNode }) => <h2 className={s.title}>{children}</h2>;

RegularForm.Title = Title;

export { RegularForm };
