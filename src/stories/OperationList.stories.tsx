import type { Meta } from '@storybook/react';

import { OperationList } from '../shared/icome-expenses-accounting/operation-list/OperationList';
import { createRandomOperation } from '../homeworks/ts1/3_write';

const meta: Meta<typeof OperationList> = {
  component: OperationList,
  title: 'Учет доходов-расходов/Список операций/Простой',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    items: [
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
      createRandomOperation(new Date().toLocaleDateString()),
    ],
  },
};
