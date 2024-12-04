import React from 'react';
import type { Meta } from '@storybook/react';

import { Layout } from '../shared/layout/Layout';
import { ThemeProvider } from '../shared/providers/ThemeProvider';
import { LangProvider } from '../shared/providers/LangProvider';
import './theme.css';

const LayoutWithThemeAndLangProviders = () => (
  <ThemeProvider>
    <LangProvider>
      <Layout />
    </LangProvider>
  </ThemeProvider>
);

const meta: Meta<typeof LayoutWithThemeAndLangProviders> = {
  component: LayoutWithThemeAndLangProviders,
  title: 'Общее задание/Layout',
  tags: ['autodocs'],
};

export default meta;

export const LayoutWithContent = {};
