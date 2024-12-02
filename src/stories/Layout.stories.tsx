import React from 'react';
import type { Meta } from '@storybook/react';

import { Layout } from '../shared/layout/Layout';
import { ThemeProvider } from '../shared/providers/ThemeProvider';
import './theme.css';

const ThemedLayout = () => (
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
);

const meta: Meta<typeof ThemedLayout> = {
  component: ThemedLayout,
  title: 'Общее задание/Layout',
  tags: ['autodocs'],
};

export default meta;

export const LayoutWithContent = {};
