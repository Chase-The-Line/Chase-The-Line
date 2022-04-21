import styled from "styled-components";

export const StyledRent = styled.header`
  background-color: ${({ theme }) => theme.colors.body};

  h1 {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: #01312b;
    margin-bottom: 50px;
  }

  .title {
    color: #848199;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-size: 15px;
    text-align: center;
  }

  .group {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
    margin: 10px;
    background: #fff;
    &:hover {
      border-radius: 26px;
      background: url("./images/leaves.svg"),
        linear-gradient(0deg, rgba(64, 163, 57, 1), rgba(64, 163, 57, 1));
      border: 1px solid rgba(151, 151, 151, 1);
      box-sizing: border-box;
      box-shadow: 0px 42px 34px rgba(82, 67, 194, 0.3);
      button {
        background: #fff;
        border-radius: 24px;
        color: #01312b;
      }
      p {
        color: #fff;
      }
    }
  }

  .price {
    font-size: 36px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    line-height: 128%;
    color: rgba(1, 49, 43, 1);
  }

  .txt-2 {
    font-size: 28px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    color: rgba(1, 49, 43, 1);
    margin-bottom: 13px;
    padding: 10px;
  }

  .txt-3 {
    font-size: 15px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    color: rgba(132, 129, 153, 1);
    width: 300px;
  }

  .txt-1 {
    font-size: 15px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    color: rgba(132, 129, 153, 1);
  }

  button {
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || "#40A339"};
    color: bisque;
    margin-bottom: 30px;
    margin-top: 30px;
    justify-content: center;
    opacity: 0.5;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const BlackNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  a {
    margin: 10px;
    padding: 10px;
    position: relative;
    color: #000;
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
