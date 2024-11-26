import React from 'react';
import { Description } from '../../description/Description';
import { Button } from '../../button/Button';
import { MT15 } from '../../mt15/MT15';
import { OperationContainer } from '../operation-container/OperationContainer';
import { Operation, OperationProps } from '../operation/Operation';
import s from './OperationDetail.module.scss';

const EditButton = () => (
  <MT15>
    <Button disabled={true}>Редактировать</Button>
  </MT15>
);

type OperationDetailProps = OperationProps & { description: string; date: string };

export const OperationDetail = (data: OperationDetailProps) => (
  <OperationContainer>
    <Operation {...data} />
    <Description description={data.description} />
    <div className={s.date}>{data.date}</div>
    <EditButton />
  </OperationContainer>
);
