import { createGlobalStyle } from 'styled-components';

type Props = {
  theme: any;
};

export const GlobalStyles = createGlobalStyle<Props>`
  body {
    background-color: ${({ theme }) => theme.colors.qrCode.lightGray};
    color: ${({ theme }) => theme.colors.primary.primaryText};
  }
`;
