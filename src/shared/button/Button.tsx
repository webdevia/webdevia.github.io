import React, { ReactNode, MouseEvent } from 'react';
import cn from 'clsx';
import s from './Button.modules.scss';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, onClick, disabled = false }: ButtonProps) => (
  <button className={cn(s.button, { [s.disabled]: disabled })} onClick={onClick}>
    {children}
  </button>
);
