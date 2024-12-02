import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Button } from '../button/Button';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return <Button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme</Button>;
};
