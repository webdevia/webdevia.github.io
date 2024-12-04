import React from 'react';
import { useLang } from '../providers/LangProvider';
import { Button } from '../button/Button';

export const LangSwitcher = () => {
  const { lang, toggleLang } = useLang();

  return <Button onClick={toggleLang}>Switch to {lang === 'ru' ? 'English' : 'Russian'} lang</Button>;
};
