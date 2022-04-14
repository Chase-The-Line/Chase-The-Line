import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, BlackNav } from "../styles/About.styled";

export default function WhiteNav() {
  return (
    <BlackNav>
      <NavLink exact="true" to="/">
        Home
      </NavLink>
      <NavLink exact="true" to="/a-propos">
        A propos de moi
      </NavLink>
      <NavLink exact="true" to="/location">
        Location
      </NavLink>
      <Logo src="./images/logo-black.svg" width="150" height="85" alt="logo" />
      <NavLink exact="true" to="/atelier">
        Mon atelier
      </NavLink>
      <NavLink exact="true" to="/images">
        Gallerie
      </NavLink>
      <NavLink exact="true" to="/contact">
        Contact
      </NavLink>
    </BlackNav>
  );
}
