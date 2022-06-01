// import styled from "styled-components";
// // import { Link } from "react-router-dom";
// import { Button } from "../../Globalstyles";

// export const StyledHome = styled.section`
//   background-image: url("./images/background-home.svg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   height: 100vh;
//   background-position: center;
//   padding-top: clamp(70px, 25vh, 600px);

//   p {
//     margin-top: 10px;
//     text-align: center;
//     font-family: Montserrat, sans-serif;
//     color: #fff;
//   }

//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     flex-direction: column;
//   }
// `;

// export const HeroContent = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: #fff;
// `;

// export const HeroContentText = styled.div`
//   margin-bottom: 35px;
//   font-size: clamp(0.9rem, 1.5vw, 1.3rem);
//   line-height: 24px;
//   text-align: center;
//   letter-spacing: 2px;
//   color: #fff;
// `;

// export const Title = styled.h1`
//   font-weight: 900;
//   letter-spacing: 0.5rem;
//   line-height: 1.3;
//   font-family: Libre Baskerville, serif;
//   font-size: 70px;
// `;

// export const HeroSubTitle = styled.h1`
//   font-size: clamp(2.3rem, 6vw, 4.5rem);
// 	margin-bottom: 2rem;
// 	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
// 	width: 100%;
// 	letter-spacing: 4px;
// 	text-align: center;
// `;

// export const Text = styled.p`
//   margin-bottom: 35px;
//   font-size: clamp(0.9rem, 1.5vw, 1.3rem);
//   line-height: 24px;
//   text-align: center;
//   letter-spacing: 2px;
//   color: #fff;
// `;

// export const Logo = styled.img`
//   margin-right: 0.8rem;
//   /* transition: all .5s ease; */

//   /* &:hover {
//     transform: scale(2);
// } */
// `;

// // export const Btn = styled(Link)`
// //   text-decoration: none;
// //   outline: none;
// //   border: none;
// // `;

// export const ButtonWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   flex-flow: wrap;
//   gap: 0.5rem;
// `;

// export const HeroButton = styled(Button)`
//   color: black;

//   &:before {
//     background: #fff;
//     height: 500%;
//   }

//   &:hover:before {
//     height: 0%;
//   }

//   &:hover {
//     color: white;
//   }
// `;

import styled from "styled-components";
// import { Button } from "../../Globalstyles";

export const HeroSection = styled.section`
  background-image: url("./images/background-home.svg");
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 150px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroText = styled.p`
  margin-top: 10px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

