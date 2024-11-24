import React, { ReactNode } from 'react';
import cn from 'clsx';
import s from './Button.modules.scss';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
};

export const Button = ({ children, disabled = false }: ButtonProps) => (
  <button className={cn(s.button, { [s.disabled]: disabled })}>{children}</button>
);
