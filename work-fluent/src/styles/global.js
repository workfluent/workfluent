import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: ${props => props.theme.mode === 'dark' ? '#121212' : '#fff'};
    color: ${props => props.theme.mode === 'dark' ? '#fff' : '#121212'};
    transition: all 0.3s ease;
  }
`;

export default GlobalStyle;