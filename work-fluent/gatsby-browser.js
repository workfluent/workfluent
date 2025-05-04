import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./src/styles/global";

const lightTheme = {
  mode: "light",
};

const darkTheme = {
  mode: "dark",
};

export const wrapRootElement = ({ element }) => {
  const [theme, setTheme] = React.useState(lightTheme);

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
