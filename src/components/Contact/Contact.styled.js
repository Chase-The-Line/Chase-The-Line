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

  .leaves{
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
    border-radius: 20px;
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
  .c-inputs {
    margin: 15px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .c-inputs input {
    width: 250px;
    height: 45px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(251, 251, 251, 0.1);
    outline: none;
    margin: 10px 0px;
    padding: 10px;
    box-sizing: border-box;
    color: #f4f4f4;
    display: flex;
  }
  .c-inputs textarea {
    width: 250px !important;
    height: 200px !important;
    outline: none;
    background-color: transparent;
    border: 1px solid rgba(82, 82, 82, 1);
    color: #f4f4f4;
    padding: 10px;
    font-size: 1.2rem;
    box-sizing: border-box;
  }
  .c-inputs button {
    width: 200px;
    height: 40px;
    background-color: #ffffff;
    border: none;
    outline: none;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    letter-spacing: 1px;
  }
  .c-inputs input:focus {
    border-bottom: 1px solid rgba(252, 252, 252, 1);
    transition: all ease 0.5s;
  }
  .c-inputs textarea:focus {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    transition: all ease 0.5s;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .c-inputs button:active {
    transform: scale(1.02);
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
  @media (max-width: 450px) {
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
