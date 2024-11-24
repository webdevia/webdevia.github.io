import { ReactNode } from 'react';

export type OperationContainer = {
  children: ReactNode;
};

export type Operation = {
  amount: number;
  category: string;
  title: string;
};

export type OperationSummary = Operation & {
  shortDescription: string;
};

export type OperationDetail = Operation & { description: string; date: string };
