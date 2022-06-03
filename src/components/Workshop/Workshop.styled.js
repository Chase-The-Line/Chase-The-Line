import styled from "styled-components";
import { Container } from "../../Globalstyles";
import { FaImages } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
// export const StyledWorkshop = styled.header`
//   background-image: url("./images/chaine.jpg");
//   /* background-size: cover; */
//   background-repeat: no-repeat;

//   .france {
//     margin-bottom: -54px;
//   }

//   .link {
//     text-decoration: none;
//     color: #000;
//   }
// `;

export const WorkSection = styled.header`
  background-image: url("./images/chaine.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: clamp(70px, 25vh, 150px);
  margin-bottom: -54px;
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
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
  /* padding: 5rem 8rem; */
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
  margin-bottom: 100px;
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
`;

export const WorksText = styled.p`
  font-size: 1rem;
  padding: 1rem 2rem;
  opacity: 0.6;
`;

export const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #003333;
    color: #fff;
  }
`;

export const Bicycle = styled(IoIosSettings)`
  font-size: 5rem;
`;

export const Images = styled(FaImages)`
  font-size: 5rem;
`;

export const WorksIconContainer = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  /* border: 2px solid #003337; */
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
