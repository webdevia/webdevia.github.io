import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from '../shared/providers/ThemeProvider';
import { ThemeSwitcher } from '../shared/theme-switcher/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <ThemeSwitcher />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Игорь Аралов (igor.aralov@rambler.ru)</h1>
          <p>Научиться разрабатывать веб-приложения при помощи React</p>
          <p>
            Профессионально работаю SQL разработчиком уже 10 лет и принимаю участие в разработке десктопного приложения
            на Delphi
          </p>
          <p>Интересуюсь фронтенд и фуллстек разработкой на js/ts</p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
