import React from 'react';
import { Description } from '../../description/Description';
import { OperationContainer } from '../operation-container/OperationContainer';
import { Operation, OperationProps } from '../operation/Operation';

type OperationSummaryProps = OperationProps & {
  shortDescription: string;
};

export const OperationSummary = (data: OperationSummaryProps) => (
  <OperationContainer>
    <Operation {...data} />
    <Description description={data.shortDescription} isShort={true} />
  </OperationContainer>
);
