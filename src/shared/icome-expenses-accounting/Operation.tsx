import React from 'react';
import { Operation as OperationProps } from './operation.types';
import s from './Operation.module.scss';

export const Operation = (data: OperationProps) => (
  <>
    <div className={s.amount}>{data.amount}</div>
    <div className={s.category}>{data.category}</div>
    <div className={s.title}>{data.title}</div>
  </>
);
