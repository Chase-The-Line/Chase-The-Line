// import { Logo } from "../Hero/Hero.styled";
// import React, { useState, useEffect } from "react";
// import { IconContext } from "react-icons";
// import { BiMenu, BiX } from "react-icons/bi";

// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   MenuIcon,
//   Menu,
//   MenuItem,
//   NavLink,
// } from "./BlackNav.styled";

// export default function WhiteNav() {
//   const [click, setClick] = useState(false);
//   // eslint-disable-next-line no-unused-vars
//   const [button, setButton] = useState(true);
//   const handleClick = () => setClick(!click);
//   const closeMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 1000) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);
//   window.addEventListener("resize", showButton);

//   return (
//     <div>
//       <IconContext.Provider value={{ color: "#fff" }}>
//         <Nav>
//           <NavbarContainer>
//             <NavLogo to="/">
//               <Logo
//                 src="./images/logo.svg"
//                 width="100"
//                 height="85"
//                 alt="logo"
//               />
//             </NavLogo>
//             <MenuIcon onClick={handleClick}>
//               {click ? <BiX /> : <BiMenu />}
//             </MenuIcon>

//             <Menu onClick={handleClick} click={click}>
//               <MenuItem>
//                 <NavLink onClick={closeMenu} exact="true" to="/">
//                   Home
//                 </NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink onClick={closeMenu} exact="true" to="/a-propos">
//                   A propos de moi
//                 </NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink onClick={closeMenu} exact="true" to="/atelier">
//                   Mon atelier
//                 </NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink onClick={closeMenu} exact="true" to="/location">
//                   Location
//                 </NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink onClick={closeMenu} exact="true" to="/images">
//                   Gallerie
//                 </NavLink>
//               </MenuItem>
//               <MenuItem>
//                 <NavLink onClick={closeMenu} exact="true" to="/newsletter">
//                   Newsletter
//                 </NavLink>
//               </MenuItem>
//             </Menu>
//           </NavbarContainer>
//         </Nav>
//       </IconContext.Provider>
//     </div>
//   );
// }

/*********************** */

import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  StyledSocialIcons,
} from "./BlackNav.styled";

const BlackNav = () => {
  // eslint-disable-next-line no-unused-vars
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./images/logo.svg" alt="logo" />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <AiOutlineMenu />}
          </MobileIcon>
          <NavMenu show={show}>
            <NavItem>
              <NavLinks onClick={closeMenu} exact="true" to="/atelier">
                Mon atelier
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={closeMenu} exact="true" to="/location">
                Location
              </NavLinks>
            </NavItem>
            <StyledSocialIcons>
              <li>
                <a href="https://www.facebook.com/Chase.The.Linemaxdvst/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://fr.ulule.com/saint-leo-a-velo-/">
                  <FaGoogle />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/chasetheline.shop/">
                  <FaInstagram />
                </a>
              </li>
            </StyledSocialIcons>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default BlackNav;
