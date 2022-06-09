import { NavLink } from "react-router-dom";
import { GoogleMap } from "./GoogleMap";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Container } from "../styles/Container.styled";
import { FooterCopyRight, StyledFooter } from "../Footer/Footer.styled";
import { StyledDivCard } from "../Card/DivCard.styled";
import { FaLeaf } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledDivCard>
        <img src="./images/acceuil.jpg" width="100%" height="560" alt="" />
        <GoogleMap />
      </StyledDivCard>
      <Container>
        <img src="./images/LogoFooter.svg" alt="logo" />
        <p>
          Sur un vélo on boit de l'eau ! Une fois sur terre on boit de la bière
          !
        </p>

        <NavLink exact="true" to="/" className="nav-active">
          Home
        </NavLink>
        <NavLink exact="true" to="/atelier" className="nav-active">
          Mon atelier
        </NavLink>
        <NavLink exact="true" to="/location" className="nav-active">
          Location
        </NavLink>
        <SocialIcons />
        <FooterCopyRight>
          &copy; 2022 Chase The Line. Tous droits réservés{" "}
            <FaLeaf />
        </FooterCopyRight>
      </Container>
    </StyledFooter>
  );
}
