import type { Meta } from '@storybook/react';

import { OperationDetail } from '../shared/icome-expenses-accounting/operation-detail/OperationDetail';

const meta: Meta<typeof OperationDetail> = {
  component: OperationDetail,
  title: 'Учет доходов-расходов/Операция/Полная',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    amount: 2999.99,
    category: 'оплата',
    title: 'Подписка',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis tempore cupiditate magni ad porro nihil consectetur a voluptas, rerum error, maiores rem, ut adipisci sint? Esse excepturi at non?',
    date: new Date().toLocaleDateString(),
  },
};
