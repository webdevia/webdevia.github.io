import React, { ReactNode } from 'react';
import s from './MT15.modules.scss';

type MT15Props = {
  children: ReactNode;
};

export const MT15 = ({ children }: MT15Props) => <div className={s.mt15}>{children}</div>;
