import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHome = styled.header`
  background-image: url("./images/background-home.svg");
  background-size: cover;
  background-repeat: no-repeat;

  /* h1 {
    font-family: Libre Baskerville, serif;
    font-weight: 400;
    font-size: 98px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #fff;
  } */

  p {
    margin-top: 10px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const HeroContent = styled.section`
  /* height: 100%;
  width: 100%; */
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  /* @media only screen and (max-width: 375px) {
    text-align: start;
    height: 80%;
  } */
`;

export const HeroContentText = styled.div`
  /* width: 50%; */
  /* padding-top: 5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  /* font-size: clamp(1rem, 10vw, 5rem); */
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1.3;
  font-family: Libre Baskerville, serif;
  /* font-weight: 400; */
  font-size: 70px;
`;

export const HeroSubTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 4rem);
  font-weight: 300;
  letter-spacing: 1rem;
  padding-top: 1rem;
`;

export const Text = styled.h3`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 400;
  padding: 2.5rem 2rem;

  @media only screen and (max-width: 375px) {
    padding: 1.5rem 0;
  }
`;

export const Btn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
`;
