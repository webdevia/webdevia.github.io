import React from 'react';
import type { Meta } from '@storybook/react';

import { Header, HeaderProps } from '../shared/header/Header';
import { ThemeProvider } from '../shared/providers/ThemeProvider';
import { LangProvider } from '../shared/providers/LangProvider';
import './theme.css';

const HeaderWithThemeAndLangProviders = (data: HeaderProps) => (
  <ThemeProvider>
    <LangProvider>
      <Header {...data} />
    </LangProvider>
  </ThemeProvider>
);

const meta: Meta<typeof HeaderWithThemeAndLangProviders> = {
  component: HeaderWithThemeAndLangProviders,
  title: 'Общее задание/Header',
  tags: ['autodocs'],
};

export default meta;

export const WithLogo = {
  args: {
    showLogo: true,
  },
};
