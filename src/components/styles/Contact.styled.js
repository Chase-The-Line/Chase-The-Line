import styled from "styled-components";

export const StyledContact = styled.header`
  background-color: ${({ theme }) => theme.colors.body};
  padding: 10px 0;

  p {
    font-size: 13px;
    font-family: Montserrat, sans-serif;
    line-height: 150%;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    height: 126px;
  }
  h1 {
    border-bottom: 1px solid white;
    padding: 10px;
    font-size: 32px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    line-height: 131%;
    letter-spacing: 0.1px;
    color: rgba(1, 49, 43, 1);
    text-align: center;
  }

  label {
    display: block;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }

  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 700px;
    padding: 30px 50px;
  }
  .password {
    font-size: 13px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    line-height: 113%;
    letter-spacing: 0.2px;
    color: rgba(82, 87, 92, 1);
    text-align: left;
  }

  .email {
    font-size: 13px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    line-height: 127%;
    letter-spacing: 0.2px;
    color: rgba(82, 87, 92, 1);
    text-align: left;
  }

  .login {
    border-radius: 50px;
    border: 1px solid #cecece;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || "#E8E8E8"};
    color: ${({ color }) => color || "#40A339"};
    margin-bottom: 30px;
    justify-content: center;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
  }

  .twitter {
    border-radius: 50px;
    border: 1px solid #cecece;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px;
    background-color: ${({ bg }) => bg || "#4099FF"};
    color: ${({ color }) => color || "#fff"};
    margin-bottom: 10px;
    justify-content: center;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
  }

  .facebook {
    border-radius: 50px;
    border: 1px solid #cecece;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px;
    background-color: ${({ bg }) => bg || "#3B5998"};
    color: ${({ color }) => color || "#fff"};
    margin-bottom: 10px;
    justify-content: center;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
  }

  .google {
    border-radius: 50px;
    border: 1px solid #cecece;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px;
    background-color: ${({ bg }) => bg || "#25282B"};
    color: ${({ color }) => color || "#fff"};
    margin-bottom: 10px;
    justify-content: center;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
    }
  }

  .forgotPass {
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    line-height: 129%;
    letter-spacing: 0.2px;
    color: rgba(82, 87, 92, 1);
    text-align: center;
    height: 10px;
    text-decoration: underline;
  }

  .account {
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    color: rgba(37, 40, 43, 1);
    text-align: center;
    height: 10px;
  }
  .group-1 {
    margin-bottom: 20px;
  }
  .group-2 {
    margin-bottom: 20px;
  }

  .image {
    display: inline;
    flex: 33.33%;
    float: left;
  }

  .logo {
    align-items: center;
  }
`;

export const BlackNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

    /* &:hover {
      opacity: 0.9;
      transform: scale(0.98);
      background-color: ${({ bg }) => bg || "#40A339"};
      color: ${({ color }) => color || "#fff"};
      border-radius: 50px;
    } */
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
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
