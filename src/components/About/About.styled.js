// import styled from "styled-components";

// export const StyledAbout = styled.header`
//   background-color: ${({ theme }) => theme.colors.body};

//   .avatar {
//     display: flex;
//     width: 192px;
//     height: 192px;
//     /* Divider/Primary */
//     border: 3px solid #fff;
//     border-radius: 200px;
//   }

//   .about {
//     display: flex;
//     flex-direction: column;
//     margin: 10px;
//   }

//   .name-infos {
//     padding: 10px;
//     box-sizing: border-box;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//   }

//   .name {
//     font-size: 24px;
//     font-family: Montserrat, sans-serif;
//     font-weight: 700;
//     line-height: 120%;
//     color: rgba(1, 49, 43, 1);
//     text-align: center;
//   }

//   .text {
//     width: 192px;
//     height: 110px;
//     font-family: Montserrat, sans-serif;
//     font-size: 14px;
//     line-height: 120%;
//     color: #01312b;
//   }
// `;

// // export const Logo = styled.img`
// //   @media (max-width: ${({ theme }) => theme.mobile}) {
// //     margin-bottom: 40px;
// //     position: relative;
// //   }
// // `;

// export const AboutContent = styled.div`
//   display: flex;
//   margin-bottom: 3rem;
//   margin-top: 3rem;
//   text-align: justify;
// `;

// export const AboutImage = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// export const AboutTitle = styled.h1`
//   font-family: Libre Baskerville, serif;
//   font-size: 32px;
//   line-height: 120%;
//   color: #01312b;
// `;

import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 7rem;
  margin-bottom: -50px;

  img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 4px;
    height: 300px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 50px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const AboutImg = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AboutContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @media only screen and (min-width: 1200px) {
    padding: 3rem 6rem;
  }
  @media only screen and (min-width: 1500px) {
    padding: 3rem 9rem;
  }
`;

export const AboutContentTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: bold;
`;

export const AboutText = styled.div`
  font-size: 1.5rem;
  text-align: justify;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
