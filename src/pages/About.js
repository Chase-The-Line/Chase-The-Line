import React from "react";
import BlackNav from "components/Navbar/BlackNav";
import { StyledAbout } from "components/About/About.styled";
import AboutMe from "components/About/AboutMe";
import Footer from "components/Footer/Footer";

export default function About() {
  return (
    <StyledAbout>
      <BlackNav />
      <AboutMe/>
      <Footer />
    </StyledAbout>
  );
}
