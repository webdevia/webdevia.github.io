import React from 'react';
import { Logo } from '../logo/Logo';
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';
import s from './Header.module.scss';

export type HeaderProps = {
  showLogo: boolean;
};

export const Header = ({ showLogo = true }: HeaderProps) => (
  <div className={s.header}>
    {showLogo && <Logo />}
    <ThemeSwitcher />
  </div>
);
