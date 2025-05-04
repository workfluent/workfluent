// src/components/Button.js
import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;