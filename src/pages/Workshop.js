import React from "react";
import WhiteNav from "../components/core/WhiteNav";
import { Container } from "../components/styles/Container.styled";
import { StyledWorkshop } from "../components/styles/Workshop.styled";
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";

export default function Workshop() {
  return (
    <StyledWorkshop>
      <Container>
        <WhiteNav />
        <img src="./images/divider.svg" alt="divider" />

        <div>
          <h1>Mon atelier</h1>
          {/* <img src="./images/star-2.svg" alt="" className="star-2" /> */}
          <p>
            Chase The Line c'est un atelier de réparation et entretien cycle et
            suspensions ! Il sera aussi bientôt possible de louer des VTT à
            assistance électrique pour des balades encadrées et une possibilité
            de faire du coaching personnalisé !
          </p>
        </div>
        <Flex>
          <Button>
            <span> intéressé(e) ?</span>
            <br />
            <span>Voir les tarifs</span>
            <br />
          </Button>
          {/* <img src="./images/star-3.svg" alt="" className="star-3" /> */}
        </Flex>
      </Container>
    </StyledWorkshop>
  );
}
