import styled from "styled-components";

export const StyledWorkshop = styled.header`
  background-image: url("./images/background-workshop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  color: hsl(192, 100%, 9%);
  padding: 20px 0;

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
    font-size: 16px;
    color: #fff;
    line-height: 140%;
    letter-spacing: -0.02em;
    margin-bottom: 200px;
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
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
      background-color: ${({ bg }) => bg || "#40A339"};
      color: ${({ color }) => color || "#fff"};
      border-radius: 50px;
    }
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
