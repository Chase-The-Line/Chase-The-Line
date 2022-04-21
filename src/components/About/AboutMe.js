import React from "react";
import { Container } from "components/styles/Container.styled";
import { Flex } from "components/styles/Flex.styled";
import SocialIconsBlack from "components/SocialIcons/SocialIconsBlack";
import { AboutContent, AboutImage } from "./About.styled";

export default function AboutMe() {
  return (
    <div>
      <Container>
        <Flex>
          <div>
            <h1>A propos de moi</h1>
            <AboutContent>
              Bonjour à tous, je m’appelle Maxime et je me lance dans la
              création d’un magasin de vélo. Celui-ci comprendrait : vente,
              entretien, réparation ainsi que des sorties encadrées et une école
              pour apprendre la discipline. Il serait situé sur le secteur de St
              Léonard des Bois, dans la Sarthe. Le but est de créer et
              développer un espace loisir convivial qui deviendrait également un
              lieu de rendez-vous.
            </AboutContent>
          </div>
          <div className="about">
            <AboutImage>
              <img src="./images/avatar.svg" alt="avatar" className="avatar" />
            </AboutImage>
            <div className="name-infos">
              <p className="name">Maxime Davoust</p>
              <span className="text">
                Location, entretien, réparation cycles en atelier ou à domicile
                <SocialIconsBlack />
              </span>
            </div>
          </div>
        </Flex>
        <h2>Mon parcours ...</h2>
        <AboutImage>
          {" "}
          <img src="./images/time.svg" alt="" />
        </AboutImage>
      </Container>
    </div>
  );
}
