import React, { ReactNode, MouseEvent } from 'react';
import s from './Button.modules.scss';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, onClick, disabled = false }: ButtonProps) => (
  <button className={s.button} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
