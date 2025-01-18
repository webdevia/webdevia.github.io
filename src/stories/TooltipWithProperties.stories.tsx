import React from 'react';
import type { Meta } from '@storybook/react';

import { Tooltip } from '../shared/tooltip/Tooltip';
import { Button } from '../shared/button/Button';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Сложные компоненты/Подсказка/С настройками',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    content: 'Подсказка',
    duration: 1000,
    position: 'top',
    children: <Button>Наведи на меня</Button>,
  },
};
