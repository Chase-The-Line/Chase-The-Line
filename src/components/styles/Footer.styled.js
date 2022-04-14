import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  text-align: center;
  margin-bottom: -50px;
  margin-top: 50px;
  
  

  a {
    justify-content: center;
    text-align: center;
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
    font-size: 11px;
    color: #fff;
    margin-top: 10px;
    opacity: 0.5;
    justify-content: center;
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
