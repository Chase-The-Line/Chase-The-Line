import { NavLink } from "react-router-dom";
import { GoogleMap } from "./GoogleMap";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Container } from "../styles/Container.styled";
import { FooterCopyRight, StyledFooter } from "../Footer/Footer.styled";
import { StyledDivCard } from "../Card/DivCard.styled";
import { Img } from "components/Content/ContentStyles";
import { Img2 } from "components/Footer/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledDivCard>
        <Img2 src="./images/acceuil.jpg" width="800" height="560" alt="" />
        <GoogleMap />
      </StyledDivCard>

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
          &copy; 2022 Chase The Line. Tous droits réservés 
        </FooterCopyRight>
        <div>
          <img
            src="./images/leaves.png"
            alt=""
            style={{ width: "50px", marginRight: "1.7rem" }}
          />
        </div>
        <div style={{ color: "#003333" }}>........</div>
      </Container>
    </StyledFooter>
  );
}
