import React from 'react';
import { OperationContainer as OperationContainerProps } from './operation.types';
import s from './OperationContainer.module.scss';

export const OperationContainer = ({ children }: OperationContainerProps) => (
  <div className={s['operation-container']}>{children}</div>
);
