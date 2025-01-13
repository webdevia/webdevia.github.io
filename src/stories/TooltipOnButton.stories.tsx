import React from 'react';
import type { Meta } from '@storybook/react';

import { Tooltip } from '../shared/tooltip/Tooltip';
import { Button } from '../shared/button/Button';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Сложные компоненты/Подсказка/На кнопке',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    children: <Button>{'Наведи на меня'}</Button>,
    content: 'Плавно всплывающая подсказка',
  },
};
