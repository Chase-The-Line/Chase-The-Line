import styled from "styled-components";
import { FaUserFriends, FaUserPlus, FaUsers } from "react-icons/fa";

export const PricingSection = styled.div`
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
    margin-top: 20px;
  }
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-flow: wrap;
  > div {
    margin: 0.7rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    > div {
      width: 90%;
    }
  }
`;

export const PricingCard = styled.div`
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

export const PricingCardInfo = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  text-decoration: none;
  border-radius: 4px;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: #fff;
  margin: auto;
  > button {
    margin-top: auto;

    &:hover {
      color: black;
      background: white;
      transition: background 0.3s ease;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const IconsWorkshop = styled.div`
  font-size: 5rem;
  display: flex;
  justify-content: center;
`;

export const PricingCardPlan = styled.h3`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 2rem;
`;

export const PricingCardCost = styled.h4`
  font-size: 1.8rem;
`;

export const PricingCardPers = styled.h4`
  font-size: 1.2rem;
`;

export const PricingCardText = styled.p`
  font-size: 1.1rem;
  margin: 0.4rem 0 1.3rem;
  color: #a9b3c1;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 1rem;
  display: flex;
  font-size: 0.94rem;

  &:before {
    content: "🚴";
    margin-right: 0.4rem;
  }
`;

export const PricingCardTime = styled.li`
  margin-bottom: 1rem;
  display: flex;
  font-size: 0.94rem;
  color: #a9b3c1;
`;

export const Icons = styled.div`
  padding: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
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

export const Users = styled(FaUsers)`
  color: #cecece;
  font-size: 5rem;
`;

export const Users2 = styled(FaUserFriends)`
  color: #cecece;
  font-size: 5rem;
`;

export const Users3 = styled(FaUserPlus)`
  color: #000;
  font-size: 5rem;
`;
