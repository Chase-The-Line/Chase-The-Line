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
} from "./DarkNav.styled";

const DarkNav = () => {
  // eslint-disable-next-line no-unused-vars
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  // eslint-disable-next-line no-unused-vars
  const closeMobileMenu = (_to, id) => {
    // eslint-disable-next-line no-restricted-globals
    if (id && location.pathname === "/") {
      scrollTo(id);
    }

    // eslint-disable-next-line no-undef
    navigate();
    setShow(false);
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

export default DarkNav;
