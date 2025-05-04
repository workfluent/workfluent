import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme'; // Ensure paths are correct
import GlobalStyles from '../styles/global'; // Ensure paths are correct

function App() {
  const themeContext = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = themeContext.background === lightTheme.background ? darkTheme : lightTheme;
    themeContext.setTheme(newTheme); // Update theme context
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <div>
        <h1>Welcome to Work Fluent</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
