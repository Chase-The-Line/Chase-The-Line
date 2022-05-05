import React from "react";
// import { Container } from "components/styles/Container.styled";
// import { Flex } from "components/styles/Flex.styled";
// import SocialIconsBlack from "components/SocialIcons/SocialIconsBlack";
import {
  AboutContainer,
  AboutContent,
  AboutImg,
  AboutContentText,
  AboutContentTitle,
  AboutText,
} from "./About.styled";
export default function AboutMe() {
  return (
    <div>
      <AboutContainer>
        <AboutContent>
          <AboutImg>
            <img src="../images/bicycle.jpg" alt="" />
          </AboutImg>
          <AboutContentText>
            <AboutContentTitle>A props de moi</AboutContentTitle>
            <AboutText>
              Bonjour à tous, je m’appelle Maxime et je me lance dans la
              création d’un magasin de vélo. Celui-ci comprendrait : vente,
              entretien, réparation ainsi que des sorties encadrées et une école
              pour apprendre la discipline. Il serait situé sur le secteur de St
              Léonard des Bois, dans la Sarthe. Le but est de créer et
              développer un espace loisir convivial qui deviendrait également un
              lieu de rendez-vous.
            </AboutText>
            {/* <WelcomeText>
             ....
            </WelcomeText> */}
          </AboutContentText>
        </AboutContent>
      </AboutContainer>
    </div>
  );
}
