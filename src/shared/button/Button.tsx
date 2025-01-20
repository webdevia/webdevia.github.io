import React, { ReactNode, MouseEvent } from 'react';
import s from './Button.modules.scss';

type ButtonProps = {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, onClick, type, disabled = false }: ButtonProps) => (
  <button className={s.button} type={type ?? 'button'} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
