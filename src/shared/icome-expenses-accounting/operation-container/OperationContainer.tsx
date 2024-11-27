import React, { ReactNode } from 'react';
import s from './OperationContainer.module.scss';

type OperationContainerProps = {
  children: ReactNode;
};

export const OperationContainer = ({ children }: OperationContainerProps) => (
  <div className={s['operation-container']}>{children}</div>
);
