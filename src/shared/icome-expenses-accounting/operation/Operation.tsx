import React from 'react';
import s from './Operation.module.scss';

export type OperationProps = {
  amount: number;
  category: string;
  title: string;
};

export const Operation = (data: OperationProps) => (
  <>
    <div className={s.amount}>{data.amount}</div>
    <div className={s.category}>{data.category}</div>
    <div className={s.title}>{data.title}</div>
  </>
);
