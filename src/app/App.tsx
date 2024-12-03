import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from '../shared/providers/ThemeProvider';
import { LangProvider, Content, useLang } from '../shared/providers/LangProvider';
import { ThemeSwitcher } from '../shared/theme-switcher/ThemeSwitcher';
import { LangSwitcher } from '../shared/lang-switcher/LangSwitcher';

const MainContent = () => {
  const content: Content = {
    fullname: { ru: 'Игорь Аралов', en: 'Igor Aralov' },
    target: {
      ru: 'Научиться разрабатывать веб-приложения при помощи React',
      en: 'Learn to develop web applications using React',
    },
    skills: {
      ru: 'Профессионально работаю SQL разработчиком уже 10 лет и принимаю участие в разработке десктопного приложения на Delphi',
      en: 'I have been working professionally as an SQL developer for 10 years and am involved in the development of a desktop application using Delphi.',
    },
    hobby: {
      ru: 'Интересуюсь фронтенд и фуллстек разработкой на js/ts',
      en: "I'm interested in frontend and full-stack development using js/ts",
    },
  };

  const { useContent } = useLang();
  const l = useContent(content);

  return (
    <>
      <h1>{l('fullname')} (igor.aralov@rambler.ru)</h1>
      <p>{l('target')}</p>
      <p>{l('skills')}</p>
      <p>{l('hobby')}</p>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="App">
          <header className="App-header">
            <div className="App-nav">
              <ThemeSwitcher />
              <LangSwitcher />
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <MainContent />
          </header>
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
