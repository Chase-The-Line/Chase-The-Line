import React from "react";
import BlackNav from "../components/core/BlackNav";
import { StyledAbout } from "../components/styles/About.styled";
import { Container } from "../components/styles/Container.styled";
import { Flex } from "../components/styles/Flex.styled";
import SocialIconsBlack from "../components/SocialIconsBlack";
import Footer from "../components/Footer";

export default function About() {
  return (
    <StyledAbout>
      <Container>
        <BlackNav />
        <hr />
        <Flex>
          <div>
            <h1>A propos de moi</h1>
            <p>
              Bonjour à tous, je m’appelle Maxime et je me lance dans la
              création d’un magasin de vélo. Celui-ci comprendrait : vente,
              entretien, réparation ainsi que des sorties encadrées et une école
              pour apprendre la discipline. Il serait situé sur le secteur de St
              Léonard des Bois, dans la Sarthe. Le but est de créer et
              développer un espace loisir convivial qui deviendrait également un
              lieu de rendez-vous.
            </p>
          </div>
          <div className="about">
            <img src="./images/avatar.svg" alt="avatar" className="avatar" />
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
        <img src="./images/time.svg" alt="" />
      </Container>
      <Footer />
    </StyledAbout>
  );
}
