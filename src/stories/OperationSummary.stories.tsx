import type { Meta } from '@storybook/react';

import { OperationSummary } from '../shared/icome-expenses-accounting/operation-summary/OperationSummary';

const meta: Meta<typeof OperationSummary> = {
  component: OperationSummary,
  title: 'Учет доходов-расходов/Операция/Краткая',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    amount: 2999.99,
    category: 'оплата',
    title: 'Подписка',
    shortDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis tempore cupiditate magni ad porro nihil consectetur a voluptas, rerum error, maiores rem, ut adipisci sint? Esse excepturi at non?',
  },
};
