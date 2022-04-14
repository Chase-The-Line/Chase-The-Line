import styled from "styled-components";

export const StyledHome = styled.header`
  background-image: url("./images/background-home.svg");
  background-size: cover;
  background-repeat: no-repeat;
  color: hsl(192, 100%, 9%);
  padding: 20px 0;

  h1 {
    font-family: Libre Baskerville, serif;
    font-weight: 400;
    font-size: 98px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: #fff;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
    text-align: center;
    font-family: Montserrat, sans-serif;
    color: #fff;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  a {
    margin: 10px;
    padding: 10px;
    position: relative;
    color: #fff;
    text-decoration: none;
    margin-top: 30px;
    font-family: Libre Baskerville, serif;
    font-size: 15px;
  }

  .nav-active {
    &::after {
      content: "";
      width: 85%;
      height: 5px;
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .star-1 & .star-2 & .star-3 {
    width: 30px;
    opacity: 0.4;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
    position: relative;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
