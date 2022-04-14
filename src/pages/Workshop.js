import React from "react";
import WhiteNav from "../components/core/WhiteNav";
import { Container } from "../components/styles/Container.styled";
import { StyledWorkshop } from "../components/styles/Workshop.styled";
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import Footer from "../components/Footer";

export default function Workshop() {
  return (
    <StyledWorkshop>
      <Container>
        <WhiteNav />
        <hr />
        <div>
          <h1>Mon atelier</h1>
          <p>
            Chase The Line c'est un atelier de réparation et entretien cycle et
            suspensions ! Il sera aussi bientôt possible de louer des VTT à
            assistance électrique pour des balades encadrées et une possibilité
            de faire du coaching personnalisé !
          </p>
        </div>
        <Flex>
          <Button>
            <span className="title"> intéressé(e) ?</span>
            <span className="title-2">Voir les tarifs</span>
            <hr className="solid"></hr>
          </Button>
        </Flex>
        <Flex>
          <Button>
            <span className="title-3">Ma galerie images</span>
          </Button>
        </Flex>
        <img src="./images/france.svg" alt="france" className="france" />
      </Container>
      
      <Footer />
    </StyledWorkshop>
   
  );
}
