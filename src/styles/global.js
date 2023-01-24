import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100vw;
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    @media (max-width: 770px) {
      font-size: 14px;
    }
  }
`;
