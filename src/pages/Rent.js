import React from "react";
import Footer from "components/Footer/Footer";
import { StyledRent } from "components/Price/Rent.styled";
import { Container } from "components/styles/Container.styled";
import BlackNav from "components/Navbar/BlackNav";
import prices from "data/prices";
import Prices from "components/Price/Prices";
import { Flex } from "components/styles/Flex.styled";

export default function Rent() {
  return (
    <StyledRent>
      <BlackNav />
      <Container>
        <h1>Grille tarifaire location</h1>
        <p className="title">Veuillez choisir le plan qui vous convient</p>
        <div className="back">
          <div className="">
            <Flex>
              {" "}
              {prices.map((item, index) => (
                <Prices key={index} item={item} />
              ))}
            </Flex>
          </div>
        </div>
      </Container>
      <Footer />
    </StyledRent>
  );
}
