import React from 'react';
import cn from 'clsx';
import s from './Description.module.scss';

type DescriptionProps = {
  description: string;
  isShort?: boolean;
};

export const Description = ({ description, isShort = false }: DescriptionProps) => (
  <div className={cn(s.description, { [s.short]: isShort })}>{description}</div>
);
