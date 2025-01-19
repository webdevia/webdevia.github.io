import React from 'react';
import type { Meta } from '@storybook/react';

import { Collapse } from '../shared/collapse/Collapse';
import { Button } from '../shared/button/Button';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: 'Сложные компоненты/Сворачивание',
  tags: ['autodocs'],
};

export default meta;

export const Test = {
  args: {
    title: 'Сворачиваемый контент',
    children: (
      <>
        <Button>Some button</Button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis! Non autem consectetur amet
          sint at saepe veniam doloremque, culpa dolore corporis ad consequuntur temporibus? Magni laudantium eum dolor
          tempora.
        </p>
      </>
    ),
  },
};
