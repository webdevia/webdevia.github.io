import type { Meta } from '@storybook/react';

import { Header } from '../shared/header/Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Общее задание/Header',
  tags: ['autodocs'],
};

export default meta;

export const WithLogo = {
  args: {
    showLogo: true,
  },
};
