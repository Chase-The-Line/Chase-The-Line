import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap');

*{
    box-sizing: border-box;
}


  img {
    max-width: 100%;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body {
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    color: #000;
    margin: 0;
}
`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  /* max-width: 1300px; */
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")};
  background-color: ${({ primary }) => (primary ? "#40A339" : "#000")};
  color: ${({ primary }) => (primary ? "#fff" : "#000")};
  padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#40A339")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${({ bigFont }) => (bigFont ? "16px" : "18px")};
  }
`;

export const OutlineButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "40px" : "30px")};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  transition: all 0.5s ease;
  background-color: #fefefe;

  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }

  /* @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? "20px" : "18px")};
    padding: ${({ big }) => (big ? "9px 30px" : "8px 28px")};
    font-size: ${({ fontBig }) => (fontBig ? "18px" : "16px")};
  } */

  /* @media only screen and (max-width: 780px) {
    border: none;
    color: #40A339;
    padding: 1rem 2rem;
    background: none;
    transition: all 0.4s ease;

    &:hover {
      border-bottom: 1px solid #40A339;
      background: none;
      border-radius: 0;
      color: #40A339;
    }
  } */
`;
