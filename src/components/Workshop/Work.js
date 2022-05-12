import React from "react";
import { Container } from "components/styles/Container.styled";
import {
  Bicycle,
  Images,
  WorkCard,
  WorkContainer,
  WorkContent,
  WorksIconContainer,
  WorksText,
  WorksText1,
  WorkTitle1,
  WorkTitle2,
} from "./Workshop.styled";
import { FaLeaf } from "react-icons/fa";

export default function Work() {
  return (
    <div>
      <Container>
        <WorkTitle1>Mon atelier</WorkTitle1>
        <WorksText1>
          Chase The Line c'est un atelier de réparation et entretien cycle et
          suspensions ! Il sera aussi bientôt possible de louer des VTT à
          assistance électrique pour des balades encadrées et une possibilité de
          faire du coaching personnalisé !
        </WorksText1>
        <div>
          <WorkContainer>
            <WorkContent>
              <a className="link" href="/">
                <WorkCard>
                  <WorksIconContainer>
                    <Bicycle />
                  </WorksIconContainer>
                  <WorkTitle2> Voir les tarifs atelier</WorkTitle2>
                  <FaLeaf />
                  <WorksText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </WorksText>
                </WorkCard>
              </a>

              <a className="link" href="/images">
                <WorkCard>
                  <WorksIconContainer>
                    <Images />
                  </WorksIconContainer>
                  <WorkTitle2> Ma gallerie d'images</WorkTitle2>
                  <FaLeaf />
                  <WorksText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </WorksText>
                </WorkCard>
              </a>
            </WorkContent>
          </WorkContainer>
        </div>
      </Container>
      <img src="./images/france.svg" alt="france" className="france" />
    </div>
  );
}
