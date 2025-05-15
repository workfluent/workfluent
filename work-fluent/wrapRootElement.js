import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './src/styles/global'; // Corrected path
import { lightTheme, darkTheme } from './src/styles/theme'; // Corrected path

const BrowserOnly = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return children;
};

export const wrapRootElement = ({ element }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === "light" ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={{ ...theme, setTheme }}>
      <GlobalStyles />
      <BrowserOnly>
        {theme.mode === "dark" && (
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
            {/* Add Starfield or other browser-dependent components here */}
          </div>
        )}
      </BrowserOnly>
      <button
        onClick={toggleTheme}
        style={{ position: "fixed", top: 10, right: 10, zIndex: 100 }}
      >
        Toggle Theme
      </button>
      {element}
    </ThemeProvider>
  );
};
