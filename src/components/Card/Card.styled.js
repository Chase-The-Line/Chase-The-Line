// import styled from "styled-components";

// export const StyledCard = styled.div`
//   display: flex;
//   align-items: center;
//   border-radius: 20px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
//   margin: 40px;
//   border: 1px solid #fff;
//   margin-top: 10px;
//   width: 350px;
//   cursor: pointer;

//   &:hover {
//     box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.21);
//     transform: scale(0.98);
//     background-color: #40a339;
//     /* background-color: #01312b; */
//     color: #fff;
//   }

//   .flex-row {
//     display: flex;
//     flex-direction: row;
//   }

//   .link {
//     text-decoration: none;
//     color: #000;
//   }

//   .divider {
//     color: #fff;
//   }

//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     flex-direction: column;
//   }
// `;

// export const CardTitle = styled.h3`
//   color: #fff;
//   text-transform: uppercase;
//   text-align: center;
//   font-size: 18px;
//   font-family: Libre Baskerville, serif;
//   font-weight: 700;
//   line-height: 132%;
//   letter-spacing: 2px;
//   color: rgba(255, 255, 255, 1);
// `;

// export const Pcard = styled.p`
//   .p-card {
//     margin: 2;
//     color: #fff;
//     font-size: 1.5rem;
//     line-height: 132%;
//     display: flex;
//     align-items: center;
//     text-align: center;
//     letter-spacing: 2px;
//   }
// `;

import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  padding: 10px;
  box-shadow: 0 0 32px 8px #d0d0d0;
  border-radius: 20px;
`;

export const FeatureImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid #000;

  padding: 30px;
`;
export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


