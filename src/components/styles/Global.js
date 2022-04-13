import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    margin: 0;
  }

  p{
    color: #000;
  }

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
