// import styled, { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
//   *{
//     box-sizing: border-box;
//   margin: 0;
//   padding: 0;
//   font-family: 'Montserrat', sans-serif;
//   }
// `;

// export const Container = styled.div`
//   width: 100%;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 0 50px;

//   @media screen and (max-width: 960px) {
//     padding: 0 30px;
//   }
// `;

// export const Section = styled.section`
//   padding: ${({ padding }) => (padding ? padding : "140px 0")};
//   margin: ${({ margin }) => (margin ? margin : "")};
//   background: ${({ inverse }) => (inverse ? "white" : "#003333")};
//   position: ${({ position }) => (position ? position : "")};
//   width: ${({ width }) => (width ? width : "auto")};
//   min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
//   max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
//   height: ${({ height }) => (height ? height : "auto")};
//   max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
//   min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};

//   @media screen and (max-width: 768px) {
//     padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
//   }
// `;

// export const Row = styled.div`
//   display: flex;
//   justify-content: ${({ justify }) => (justify ? justify : "")};
//   align-items: ${({ align }) => (align ? align : "")};
//   gap: ${({ gap }) => (gap ? gap : "")};
//   padding: ${({ padding }) => (padding ? padding : "")};
//   margin: ${({ margin }) => (margin ? margin : "")};
//   position: ${({ position }) => (position ? position : "")};
//   width: ${({ width }) => (width ? width : "auto")};
//   min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
//   max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
//   height: ${({ height }) => (height ? height : "auto")};
//   max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
//   min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
//   flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
// `;

// export const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: ${({ justify }) => (justify ? justify : "")};
//   align-items: ${({ align }) => (align ? align : "")};
//   gap: ${({ gap }) => (gap ? gap : "")};
//   padding: ${({ padding }) => (padding ? padding : "")};
//   margin: ${({ margin }) => (margin ? margin : "")};
//   position: ${({ position }) => (position ? position : "")};
//   width: ${({ width }) => (width ? width : "auto")};
//   min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
//   max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
//   height: ${({ height }) => (height ? height : "auto")};
//   max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
//   min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
// `;

// export const HeroSubTitle = styled.h1`
//   font-size: clamp(2.3rem, 6vw, 4.5rem);
//   margin-bottom: 2rem;
//   color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
//   width: 100%;
//   letter-spacing: 4px;
//   text-align: center;
// `;

// export const OutlineButton = styled.button`
//   border-radius: ${({ bigRadius }) => (bigRadius ? "40px" : "30px")};
//   border: 2px solid #333;
//   color: #333;
//   outline: none;
//   padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
//   font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
//   transition: all 0.5s ease;
//   background-color: #fefefe;

//   &:hover {
//     background-color: #333;
//     color: #fff;
//     border: none;
//     transform: translateY(-0.5rem) scale(1.02);
//   }
//   &:active {
//     transform: translateY(0.5rem);
//   }

//   @media only screen and (max-width: 1200px) {
//     border-radius: ${({ bigRadius }) => (bigRadius ? "20px" : "18px")};
//     padding: ${({ big }) => (big ? "9px 30px" : "8px 28px")};
//     font-size: ${({ fontBig }) => (fontBig ? "18px" : "16px")};
//   }

//   @media only screen and (max-width: 780px) {
//     border: none;
//     color: #40a339;
//     padding: 1rem 2rem;
//     background: none;
//     transition: all 0.4s ease;

//     &:hover {
//       border-bottom: 1px solid #40a339;
//       background: none;
//       border-radius: 0;
//       color: #40a339;
//     }
//   }
// `;

// export const Button = styled.button`
//   border-radius: 4px;
//   background: none;
//   white-space: nowrap;
//   padding: 10px 20px;
//   font-size: 16px;
//   color: #fff;
//   outline: none;
//   border: 2px solid #fff;
//   cursor: pointer;
//   overflow: hidden;
//   position: relative;

//   &:before {
//     background: #fff;
//     content: "";
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: -1;
//     transition: all 0.6s ease;
//     width: 100%;
//     height: 0%;
//     transform: translate(-50%, -50%) rotate(45deg);
//   }

//   &:hover:before {
//     height: 500%;
//   }

//   &:hover {
//     color: black;
//   }
// `;

// export default GlobalStyles;

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export const HeroSubTitle = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-top: 7rem;
  color: ${({ inverse }) => (inverse ? "$003333" : "#fff")};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$003333" : "#fff")};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const Heading2 = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$fff" : "#003333")};
  /* letter-spacing: 0.4rem; */
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;
export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "140px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "#003333")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};

  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  margin: 20px;
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: black;
  }
`;

export default GlobalStyles;
