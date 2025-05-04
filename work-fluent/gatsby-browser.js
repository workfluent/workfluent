import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./src/styles/global"; // Corrected path

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
      <GlobalStyles />
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
