// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Container } from "../../Globalstyles";

// export const Nav = styled.nav`
//   font-size: 18px;
//   position: sticky;
//   top: 0;
//   z-index: 999;
//   height: 80px;
//   background-color: #faf9f7;
//   box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const NavbarContainer = styled(Container)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 80px;
//   ${Container};
// `;

// export const NavLogo = styled(Link)`
//   color: #000;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   font-size: 2.5rem;
//   font-weight: 800;
//   transition: all 0.5s ease;
//   &:hover {
//     transform: scale(1.08);
//   }
// `;

// export const MenuIcon = styled.div`
//   display: none;
//   margin-right: 1rem;
// 	width: 3rem;

//   @media (max-width: 1000px) {
//     display: block;
//     position: absolute;
//     /* background-color: #000; */
//     color: #000;
//     top: 0;
//     right: 0;
//     transform: translate(-50%, 20%);
//     font-size: 4rem;
//     cursor: pointer;
//   }
// `;

// export const Menu = styled.ul`
//   display: flex;
//   align-items: center;
//   text-align: center;

//   @media only screen and (max-width: 1000px) {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 100vh;
//     position: absolute;
//     top: 80px;
//     left: ${({ click }) => (click ? "0" : "-100%")};
//     background-color: #faf9f7;
//     transition: all 0.5s ease;
//   }
// `;

// export const MenuItem = styled.li`
//   list-style: none;
//   height: 80px;

//   @media only screen and (max-width: 1000px) {
//     width: 100%;
//     &:hover {
//       border: none;
//     }
//   }
// `;

// export const NavLink = styled(Link)`
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 15px;
//   color: #000;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem 2rem;
//   height: 100%;
//   transition: all 0.2s ease;

//   &:hover {
//     color: #40a339;
//     transform: traslateY(-3rem);
//   }
//   &:active {
//     transform: traslateY(3rem);
//     color: #40a339;
//   }

//   @media only screen and (max-width: 1000px) {
//     display: block;
//     padding: 3rem;
//     text-align: center;
//     transition: all 0.2s ease;
//   }
// `;

import styled from "styled-components";
import { Container } from "../../Globalstyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.5);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);

  transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;
  justify-content: center;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 9rem;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #003333;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    color: #c8c9d8;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
