import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-bottom: -50px;
  margin-top: 50px;

  .city-hall {
    display: flex;
    position: relative;
    width: 603px;
    height: 521px;
    left: 0px;
    top: 0px;
  }

  a {
    margin: 10px;
    padding: 10px;
    position: relative;
    color: #fff;
    text-decoration: none;
    margin-top: 30px;
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

  p {
    text-align: center;
    margin: 0;
    margin-bottom: 30px;
    font-size: 13px;
    color: #fff;
    margin-top: 10px;
    opacity: 0.5;
    justify-content: center
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
