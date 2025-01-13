import React from 'react';
import type { Meta } from '@storybook/react';

import { Tooltip } from '../shared/tooltip/Tooltip';

type TooltipInlineTextProps = {
  content: React.ReactNode;
};

const TooltipInlineText = ({ content }: TooltipInlineTextProps) => (
  <p>
    {'Lorem ipsum dolor sit amet '}
    <Tooltip content={content}>
      <b>consectetur</b>
    </Tooltip>
    {' adipisicing elit.'}
  </p>
);

const meta: Meta<typeof Tooltip> = {
  component: TooltipInlineText,
  title: 'Сложные компоненты/Подсказка/В тексте',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    content: 'Плавно всплывающая подсказка',
  },
};
