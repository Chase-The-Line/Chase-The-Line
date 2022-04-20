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
    margin-top: 10px;
    text-align: center;
    font-family: Montserrat, sans-serif;
    color: #fff;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin: 10px;
    padding: 10px;
    position: relative;
    color: #fff;
    text-decoration: none;
    margin-top: 30px;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    cursor: pointer;

    /* &:hover {
      opacity: 0.9;
      transform: scale(0.98);
      background-color: ${({ bg }) => bg || "#40A339"};
      color: ${({ color }) => color || "#fff"};
      border-radius: 50px;
    } */

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
