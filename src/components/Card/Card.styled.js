import styled from "styled-components";
import { FcAbout } from "react-icons/fc";
import { FaBicycle } from "react-icons/fa";
import { BiNews } from "react-icons/bi";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px;
  border: 1px solid #fff;
  margin-top: 10px;
  width: 350px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(0.98);
    background-color: #40a339;
    /* background-color: #01312b; */
    color: #fff;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .link {
    text-decoration: none;
    color: #000;
  }

  .divider {
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const CardTitle = styled.h3`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  font-family: Libre Baskerville, serif;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 1);
`;

export const Pcard = styled.p`
  .p-card {
    margin: 2;
    color: #fff;
    font-size: 15px;
    line-height: 132%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 2px;
  }
`;

export const About = styled(FcAbout)`
  color: #fff;
  font-size: 5rem;
`;
export const Bicycle = styled(FaBicycle)`
  color: #fff;
  font-size: 5rem;
`;
export const News = styled(BiNews)`
  color: #fff;
  font-size: 5rem;
`;

export const ContentIcon = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 2px solid #fff;
  /* transition: all 0.3s ease-out; */
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
