import React from "react";
import Footer from "components/Footer/Footer";
import { StyledRent } from "components/Price/Rent.styled";
import { Container } from "components/styles/Container.styled";
import BlackNav from "components/Navbar/BlackNav";
import Prices from "components/Price/Prices";
import { Flex } from "components/styles/Flex.styled";
import prices from "data/prices";
// import Prices from "components/Price/Prices";

export default function Rent() {
  return (
    <StyledRent>
      <BlackNav />
      <Container>
        <h1>Grille tarifaire location</h1>
        <p className="title">
          Veuillez choisir le plan qui vous convient | Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
        </p>
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

// import Prices from 'components/Price/Prices';
// import React from 'react';

// const Rent = () => {
// 	return <Prices />;
// };

// export default Rent;
