import React from "react";
import Footer from "../components/Footer";
import { StyledRent } from "../components/styles/Rent.styled";
import { Container } from "../components/styles/Container.styled";
import BlackNav from "../components/core/BlackNav";

export default function Rent() {
  return (
    <StyledRent>
      <Container>
        <BlackNav />
        <hr />
        Location
      </Container>
      <Footer />
    </StyledRent>
  );
}
