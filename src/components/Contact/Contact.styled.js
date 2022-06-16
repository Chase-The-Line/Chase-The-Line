import styled from "styled-components";

export const StyledContact = styled.div`
  .contact-info {
    padding: 2.3rem 2.2rem;
    position: relative;
    margin-top: 2px;
  }

  .title {
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 0.7rem;
    text-align: center;
  }
  .text {
    color: #fff;
    margin: 1.5rem 0 2rem 0;
    font-size: 15px;
    text-align: center;
  }

  .leaves {
    width: 50px;
    margin-right: 1.7rem;
  }
  .information {
    display: flex;
    color: #fff;
    margin: 0.7rem 0;
    align-items: center;
    font-size: 0.95rem;
  }

  .icon {
    width: 18px;
    margin-right: 0.7rem;
  }

  .social a {
    padding: 20px;
    color: #003333;
    font-size: 1.3rem;
  }
  #contact {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
  }
  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
  }
  .social a:hover {
    color: #003333;
    transition: all ease 0.3s;
  }
  .contact-box {
    background-color: #003333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 30px;
    box-shadow: 2px 0px 30px rgba(0, 0, 0, 0.1);
  }
  .c-heading h1 {
    font-family: Roboto;
    color: #e7eef3;
    font-size: 2.5rem;
    font-weight: lighter;
    margin: 0px;
    padding: 0px;
  }
  .c-heading p {
    font-family: Roboto;
    color: #cecece;
    font-size: 0.8rem;
    font-weight: lighter;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  .map {
    filter: grayscale(0.2);
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
    border: 2px solid #ffffff;
  }
  @media (max-width: 1100px) {
    .map {
      display: none;
    }
  }
  @media (max-width: 758px) {
    .social {
      display: none;
    }
    .contact-box {
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
    }
    #contact {
      position: static;
      transform: translate(0, 0);
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
    }
    .c-heading h1 {
      font-size: 2.2rem;
      text-align: center;
    }
  }
`;
