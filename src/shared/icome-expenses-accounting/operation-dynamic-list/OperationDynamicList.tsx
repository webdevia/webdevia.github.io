import React, { useCallback, useRef, useState } from 'react';
import { OperationList } from '../operation-list/OperationList';
import { createRandomOperation, Operation } from '../../../homeworks/ts1/3_write';
import s from './OperationDynamicList.module.scss';

const createOpearation = () => createRandomOperation(new Date().toLocaleDateString());
const createBatchOperations = (nr: number) => Array.from(Array(nr), () => createOpearation());

export const OperationDynamicList = () => {
  const [operations, setOperations] = useState<Operation[]>(createBatchOperations(5));
  const addMoreOperations = () => setOperations((prev) => [...prev, ...createBatchOperations(5)]);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastOperationRef = useCallback((node: HTMLDivElement) => {
    observer.current && observer.current.disconnect();
    observer.current = new IntersectionObserver((items) => items[0].isIntersecting && addMoreOperations());
    node && observer.current.observe(node);
  }, []);

  return (
    <div className={s['operation-dynamic-list']}>
      <OperationList items={operations} />
      <div ref={lastOperationRef}></div>
    </div>
  );
};
