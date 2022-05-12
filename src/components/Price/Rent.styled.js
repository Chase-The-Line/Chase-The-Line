import { FaUserFriends, FaUserPlus, FaUsers } from "react-icons/fa";
import styled from "styled-components";

export const StyledRent = styled.header`
  /* background-color: ${({ theme }) => theme.colors.body}; */

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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 40px;
    transition: all 0.4s ease;
    margin-bottom: 5rem;
    margin: 20px;
    background-color: #fff;
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      border-radius: 40px;
      background: url("./images/leaves.svg"),
        linear-gradient(0deg, rgba(64, 163, 57, 1), rgba(64, 163, 57, 1));
      background-size: cover;
      background-repeat: no-repeat;
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

    .price {
      font-size: 36px;
      font-family: Montserrat, sans-serif;
      font-weight: 700;
      /* line-height: 128%; */
      color: rgba(1, 49, 43, 1);
    }

    .txt-2 {
      font-size: 28px;
      font-family: Montserrat, sans-serif;
      font-weight: 600;
      color: rgba(1, 49, 43, 1);
      /* margin-bottom: 13px; */
      /* padding: 10px; */
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
      font-weight: 900;
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
      color: #fff;
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
  }
`;

export const Users = styled(FaUsers)`
  color: #cecece;
  font-size: 5rem;
`;

export const Users2 = styled(FaUserFriends)`
  color: #cecece;
  font-size: 5rem;
`;

export const Users3 = styled(FaUserPlus)`
  color: #cecece;
  font-size: 5rem;
`;

export const IconPrices = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 2px solid #40a339;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${({ color }) => color || "#000"};
  }
`;
