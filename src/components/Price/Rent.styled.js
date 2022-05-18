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


// import styled from 'styled-components';

// export const PricingSection = styled.div`
// 	padding: 160px 0;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	background: #101522;
// `;

// export const PricingWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	margin: 0 auto;

// 	@media screen and (max-width: 960px) {
// 		margin: 0 30px;
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 	}
// `;

// export const PricingContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	flex-flow: wrap;
// 	> div {
// 		margin: 0.7rem;
// 	}

// 	@media screen and (max-width: 768px) {
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: center;
// 		width: 100%;
// 		> div {
// 			width: 90%;
// 		}
// 	}
// `;

// export const PricingCard = styled.div`
// 	&:hover {
// 		transform: scale(1.06);
// 		transition: all 0.3s ease-out;
// 	}
// `;

// export const PricingCardInfo = styled.div`
// 	background: #242424;
// 	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
// 	width: 280px;
// 	text-decoration: none;
// 	border-radius: 4px;
// 	height: 100%;

// 	display: flex;
// 	flex-direction: column;
// 	padding: 24px;
// 	color: #fff;
// 	margin: auto;
// 	> button {
// 		margin-top: auto;

// 		&:hover {
// 			color: black;
// 			background: white;
// 			transition: background 0.3s ease;
// 		}
// 	}

// 	@media screen and (max-width: 768px) {
// 		width: 90%;

// 		&:hover {
// 			transform: none;
// 		}
// 	}
// `;

// export const PricingCardPlan = styled.h3`
// 	margin-bottom: 5px;
// 	font-size: 2rem;
// `;

// export const PricingCardCost = styled.h4`
// 	font-size: 1.2rem;
// `;

// export const PricingCardText = styled.p`
// 	font-size: 1.1rem;
// 	margin: 0.4rem 0 1.3rem;
// 	color: #a9b3c1;
// `;

// export const PricingCardFeatures = styled.ul`
// 	margin: 16px 0 32px;
// 	list-style: none;
// 	display: flex;
// 	flex-direction: column;
// 	color: #a9b3c1;
// `;

// export const PricingCardFeature = styled.li`
// 	margin-bottom: 1rem;
// 	display: flex;
// 	font-size: 0.94rem;

// 	&:before {
// 		content: '🎧';
// 		margin-right: 0.4rem;
// 	}
// `;
