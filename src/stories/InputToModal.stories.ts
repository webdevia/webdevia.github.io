import type { Meta } from '@storybook/react';

import { StatefullModalForm } from '../shared/statefull-modal-form/StatefullModalForm';

const meta: Meta<typeof StatefullModalForm> = {
  component: StatefullModalForm,
  title: 'Общее задание/Состояние модального окна',
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        height: '500px',
      },
    },
  },
};

export default meta;

export const Test = {};
