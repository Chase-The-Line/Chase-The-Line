import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, Nav } from "../styles/Home.styled";
// import Hamburger from "react-hamburgers";

export default function WhiteNav({ close }) {
  return (
    <Nav className="menu">
      <NavLink onClick={close} exact="true" to="/">
        Home
      </NavLink>
      <NavLink onClick={close} exact="true" to="/a-propos">
        A propos de moi
      </NavLink>
      <NavLink onClick={close} exact="true" to="/location">
        Location
      </NavLink>
      <Logo
        src="./images/logo.svg"
        width="150"
        height="85"
        alt="logo"
        className="active"
      />
      <NavLink onClick={close} exact="true" to="/atelier">
        Mon atelier
      </NavLink>
      <NavLink onClick={close} exact="true" to="/images">
        Gallerie
      </NavLink>
      <NavLink onClick={close} exact="true" to="/contact">
        Contact
      </NavLink>
    </Nav>
  );
}
