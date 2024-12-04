import React from 'react';
import { Logo } from '../logo/Logo';
import { ThemeSwitcher } from '../theme-switcher/ThemeSwitcher';
import { LangSwitcher } from '../lang-switcher/LangSwitcher';
import s from './Header.module.scss';

export type HeaderProps = {
  showLogo: boolean;
};

export const Header = ({ showLogo = true }: HeaderProps) => (
  <div className={s.header}>
    <div className={s.left}>{showLogo && <Logo />}</div>
    <div className={s.right}>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </div>
);
