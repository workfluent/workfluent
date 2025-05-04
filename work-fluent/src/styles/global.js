import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
  div {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default GlobalStyles;