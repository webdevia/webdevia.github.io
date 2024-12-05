import type { Meta } from '@storybook/react';

import { OperationDynamicList } from '../shared/icome-expenses-accounting/operation-dynamic-list/OperationDynamicList';

const meta: Meta<typeof OperationDynamicList> = {
  component: OperationDynamicList,
  title: 'Учет доходов-расходов/Список операций/Динамический с автодобавлением',
  tags: ['autodocs'],
};

export default meta;

export const Test = {};
