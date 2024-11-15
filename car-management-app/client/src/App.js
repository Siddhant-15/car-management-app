import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes/lightTheme';
import { darkTheme } from './themes/darkTheme';
import GlobalStyles from './themes/GlobalStyles';
import MainRouter from './MainRouter'; // Router for handling pages
import { AuthProvider } from './context/AuthContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ToggleButton } from './AppStyles';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <AuthProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ToggleButton>
        <MainRouter />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
