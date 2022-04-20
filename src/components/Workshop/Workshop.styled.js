import styled from "styled-components";

export const StyledWorkshop = styled.header`
  background-image: url("./images/background-workshop.svg");
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    font-family: Libre Baskerville, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 140%;
    color: #fff;
  }

  p {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #fff;
    line-height: 140%;
    letter-spacing: -0.02em;
  }

  .title {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.6;
  }

  .title-2 {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .france {
    margin-bottom: -54px;
  }

  .solid {
    border-top: 1px solid #fff;
  }
`;
