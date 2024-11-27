import React from 'react';
import { Logo } from '../logo/Logo';
import s from './Header.module.scss';

type HeaderProps = {
  showLogo: boolean;
};

export const Header = ({ showLogo = true }: HeaderProps) => <div className={s.header}>{showLogo && <Logo />}</div>;
