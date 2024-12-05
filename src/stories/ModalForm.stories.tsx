import React from 'react';
import type { Meta } from '@storybook/react';

import { ModalForm } from '../shared/modal-form/ModalForm';

const SomeContent = () => (
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum laudantium officiis, maiores cum sunt dolores
    maxime deserunt distinctio optio ipsa illum veniam consectetur corrupti laboriosam debitis corporis voluptates
    cumque.
  </p>
);

const meta: Meta<typeof ModalForm> = {
  component: ModalForm,
  title: 'Общее задание/Модальное окно/Модальное окно',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'boolean' },
      mapping: { false: '', true: <SomeContent /> },
    },
  },
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
};

export default meta;

export const NotVisible = {
  args: {
    visible: false,
  },
};

export const Blank = {
  args: {
    visible: true,
  },
};

export const WithContent = {
  args: {
    visible: true,
    children: <SomeContent />,
  },
};
