import React, { useState } from 'react';
import { OperationList } from '../operation-list/OperationList';
import { Button } from '../../button/Button';
import { createRandomOperation, Operation } from '../../../homeworks/ts1/3_write';
import s from './OperationListAddMore.module.scss';

const createOpearation = () => createRandomOperation(new Date().toLocaleDateString());
const createBatchOperations = (nr: number) => Array.from(Array(nr), () => createOpearation());

export const OperationListAddMore = () => {
  const [operations, setOperations] = useState<Operation[]>(createBatchOperations(2));
  const addMoreOperations = () => setOperations((prev) => [...prev, ...createBatchOperations(2)]);

  return (
    <div className={s.container}>
      <OperationList items={operations} />
      <Button onClick={addMoreOperations}>Показать еще</Button>
    </div>
  );
};
