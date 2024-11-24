import React from 'react';
import { OperationSummary as OperationSummaryProps } from './operation.types';
import { OperationContainer } from './OperationContainer';
import { Operation } from './Operation';
import { Description } from '../description/Description';

export const OperationSummary = (data: OperationSummaryProps) => (
  <OperationContainer>
    <Operation {...data} />
    <Description description={data.shortDescription} isShort={true} />
  </OperationContainer>
);
