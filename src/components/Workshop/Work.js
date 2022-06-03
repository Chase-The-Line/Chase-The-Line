import React from "react";
import {
  Bicycle,
  Images,
  WorkCard,
  WorkContainer,
  WorkContent,
  WorkSection,
  WorksIconContainer,
  WorksText,
  WorksText1,
  WorkTitle1,
  WorkTitle2,
} from "./Workshop.styled";
import { FaLeaf } from "react-icons/fa";
import { Container } from "Globalstyles";

export default function Work() {
  return (
    <WorkSection>
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
              <a className="link" href="/atelier">
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
              {/* <a className="link" href="/images"> */}
                {/* <WorkCard>
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
                </WorkCard> */}
              {/* </a> */}
            </WorkContent>
          </WorkContainer>
        </div>
      </Container>
      {/* <img src="./images/france.svg" alt="france" className="france" /> */}
    </WorkSection>
  );
}
