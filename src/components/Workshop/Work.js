import React from "react";
import { Container } from "components/styles/Container.styled";
import { Flex } from "components/styles/Flex.styled";
import { Button } from "Globalstyles";

export default function Work() {
  return (
    <div>
      {" "}
      <Container>
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
            <span className="title-2">Voir les tarifs atelier</span>
            <hr className="solid"></hr>
          </Button>
        </Flex>
        <Flex>
          {/* <Button>
        <span className="title-3">Ma galerie images</span>
      </Button> */}
        </Flex>
      </Container>
      <img src="./images/france.svg" alt="france" className="france" />
    </div>
  );
}
