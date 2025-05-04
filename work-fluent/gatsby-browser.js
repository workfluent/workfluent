import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./src/styles/global";

// Note: If the build fails to fetch cached dependencies, try the following steps:
// 1. Run `gatsby clean` to clear the cache.
// 2. Reinstall dependencies using `npm install` or `yarn install`.
// 3. Rebuild the project with `gatsby build`.

const lightTheme = {
  mode: "light",
};

const darkTheme = {
  mode: "dark",
};

const WrapRootElement = ({ element }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === "light" ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button onClick={toggleTheme} style={{ position: "fixed", top: 10, right: 10 }}>
        Toggle Theme
      </button>
      {element}
    </ThemeProvider>
  );
};

export const wrapRootElement = ({ element }) => {
  return <WrapRootElement element={element} />;
};
