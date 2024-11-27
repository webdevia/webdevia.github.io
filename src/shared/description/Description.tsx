import React from 'react';
import cn from 'clsx';
import s from './Description.module.scss';

type Description = {
  description: string;
  isShort?: boolean;
};

export const Description = ({ description, isShort = false }: Description) => (
  <div className={cn(s.description, { [s.short]: isShort })}>{description}</div>
);
