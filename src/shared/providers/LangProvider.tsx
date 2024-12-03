import React, { createContext, useState, useContext, ReactNode } from 'react';

type Lang = 'ru' | 'en';
type ContentKey = string;
type ContentValue = string;
type LangValues = Partial<Record<Lang, ContentValue>>;
export type Content = Record<ContentKey, LangValues>;

type LangContextType = {
  lang: Lang;
  useContent: (content: Content) => (key: ContentKey) => ContentValue;
  toggleLang: () => void;
};

type LangProviderProps = {
  children: ReactNode;
};

const LangContext = createContext<LangContextType>(null);

export const useLang = () => useContext(LangContext);

const withContent =
  (lang: Lang) =>
  (content: Content) =>
  (key: ContentKey): ContentValue =>
    content[key]?.[lang];

export const LangProvider = ({ children }: LangProviderProps) => {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'ru' : 'en'));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, useContent: withContent(lang) }}>{children}</LangContext.Provider>
  );
};
