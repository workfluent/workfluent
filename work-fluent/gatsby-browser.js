import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./src/styles/global";

const lightTheme = {
  mode: "light",
};

const darkTheme = {
  mode: "dark",
};

const WrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
};

export const wrapRootElement = ({ element }) => {
  return <WrapRootElement element={element} />;
};
