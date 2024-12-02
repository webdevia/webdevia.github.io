import React from 'react';
import type { Meta } from '@storybook/react';

import { Header, HeaderProps } from '../shared/header/Header';
import { ThemeProvider } from '../shared/providers/ThemeProvider';
import './theme.css';

const ThemedHeader = (data: HeaderProps) => (
  <ThemeProvider>
    <Header {...data} />
  </ThemeProvider>
);

const meta: Meta<typeof ThemedHeader> = {
  component: ThemedHeader,
  title: 'Общее задание/Header',
  tags: ['autodocs'],
};

export default meta;

export const WithLogo = {
  args: {
    showLogo: true,
  },
};
