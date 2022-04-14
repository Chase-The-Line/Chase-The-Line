import React from "react";
import { NavLink } from "react-router-dom";
import { Logo, Nav } from "../styles/Home.styled";

export default function WhiteNav() {
  return (
    <Nav>
      <NavLink exact="true" to="/" className="nav-active">
        Home
      </NavLink>
      <NavLink exact="true" to="/a-propos" className="nav-active">
        A propos de moi
      </NavLink>
      <Logo src="./images/logo.svg" width="150" height="85" alt="logo" />
      <NavLink exact="true" to="/atelier" className="nav-active">
        Mon atelier
      </NavLink>
      <NavLink exact="true" to="/images" className="nav-active">
        Gallerie
      </NavLink>
    </Nav>
  );
}
