import { Img } from "components/Content/ContentStyles";
import { Container } from "Globalstyles";
import { FaLeaf } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";
import { FooterCopyRight, StyledFooter } from "./Footer.styled";
function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Img src="./images/LogoFooter.svg" alt="logo" />
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
        <NavLink exact="true" to="/contact" className="nav-active">
          Contact
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

export default Footer;
