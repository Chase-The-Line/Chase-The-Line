// import { Logo } from "../Hero/Hero.styled";
import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  // NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  NavLink,
} from "./BlackNav.styled";

export default function WhiteNav() {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              {/* <NavIcon /> */}
              Chase The Line
              {/* <Logo
                src="./images/logo.svg"
                width="100"
                height="85"
                alt="logo"
              /> */}
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX /> : <BiMenu />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <NavLink onClick={closeMenu} exact="true" to="/">
                  Home
                </NavLink>
              </MenuItem>
              {/* <MenuItem>
                <NavLink onClick={closeMenu} exact="true" to="/a-propos">
                  A propos de moi
                </NavLink>
              </MenuItem> */}
              <MenuItem>
                <NavLink onClick={closeMenu} exact="true" to="/atelier">
                  Mon atelier
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink onClick={closeMenu} exact="true" to="/location">
                  Location
                </NavLink>
              </MenuItem>
              {/* <MenuItem>
                <NavLink onClick={closeMenu} exact="true" to="/images">
                  Gallerie
                </NavLink>
              </MenuItem> */}
              {/* <MenuItem>
                <NavLink onClick={closeMenu} exact="true" to="/newsletter">
                  Newsletter
                </NavLink>
              </MenuItem> */}
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
}
