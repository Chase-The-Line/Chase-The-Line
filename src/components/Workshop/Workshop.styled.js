import styled from "styled-components";
import { Container } from "../../Globalstyles";
import { FaBicycle, FaImages } from "react-icons/fa";

export const StyledWorkshop = styled.header`
  background-image: url("./images/background-workshop.svg");
  background-size: cover;
  background-repeat: no-repeat;

  .france {
    margin-bottom: -54px;
  }

  .link {
    text-decoration: none;
    color: #000;
  }
`;

export const WorkContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const WorkContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 8rem;
  color: #333333;
  align-items: stretch;

  ${Container};
`;

export const WorkTitle1 = styled.h1`
  font-family: Libre Baskerville, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 140%;
  color: #fff;
`;

export const WorkTitle2 = styled.h3`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-top: 1rem;
`;

export const WorksText1 = styled.p`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  line-height: 140%;
  letter-spacing: -0.02em;
`;

export const WorksText = styled.p`
  font-size: 1.0rem;
  padding: 1rem 2rem;
  opacity: 0.6;
`;

export const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30rem;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #40a339;
    color: #fff;
  }
`;

export const Bicycle = styled(FaBicycle)`
  color: #000;
  font-size: 5rem;
`;

export const Images = styled(FaImages)`
  color: #000;
  font-size: 5rem;
`;

export const WorksIconContainer = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 2px solid #40a339;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
