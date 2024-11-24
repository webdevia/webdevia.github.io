import React from 'react';
import { OperationDetail as OperationDetailProps } from './operation.types';
import { OperationContainer } from './OperationContainer';
import { Operation } from './Operation';
import { Description } from '../description/Description';
import { Button } from '../button/Button';
import { MT15 } from '../mt15/MT15';
import s from './OperationDetail.module.scss';

const EditButton = () => (
  <MT15>
    <Button disabled={true}>Редактировать</Button>
  </MT15>
);

export const OperationDetail = (data: OperationDetailProps) => (
  <OperationContainer>
    <Operation {...data} />
    <Description description={data.description} />
    <div className={s.date}>{data.date}</div>
    <EditButton />
  </OperationContainer>
);
