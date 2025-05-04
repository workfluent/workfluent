import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './src/styles/global'; // Corrected path
import { lightTheme, darkTheme } from './src/styles/theme'; // Corrected path

export const wrapRootElement = ({ element }) => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={{ ...theme, setTheme }}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
};
