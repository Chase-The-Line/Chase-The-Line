import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, Nav } from "../styles/Home.styled";

export default function WhiteNav() {
  return (
    <Nav>
      <NavLink exact="true" to="/">
        Home
      </NavLink>
      <NavLink exact="true" to="/a-propos">
        A propos de moi
      </NavLink>
      <NavLink exact="true" to="/location">
        Location
      </NavLink>
      <Logo src="./images/logo.svg" width="150" height="85" alt="logo" />
      <NavLink exact="true" to="/atelier">
        Mon atelier
      </NavLink>
      <NavLink exact="true" to="/images">
        Gallerie
      </NavLink>
      <NavLink exact="true" to="/contact">
        Contact
      </NavLink>
    </Nav>
  );
}
