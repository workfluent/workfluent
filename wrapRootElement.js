import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './work-fluent/src/styles/global.css'; // Corrected path
import { lightTheme, darkTheme } from './work-fluent/src/styles/theme'; // Corrected path

export const wrapRootElement = ({ element }) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={{ ...theme, setTheme }}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
};
