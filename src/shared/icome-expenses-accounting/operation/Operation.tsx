import React from 'react';
import cn from 'clsx';
import s from './Operation.module.scss';

export type OperationProps = {
  amount: number;
  category: string;
  title: string;
};

export const Operation = (data: OperationProps) => (
  <>
    <div className={cn(s.amount, data.amount < 0 && s.cost)}>{data.amount}</div>
    <div className={s.category}>{data.category}</div>
    <div className={s.title}>{data.title}</div>
  </>
);
