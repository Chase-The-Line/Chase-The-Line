import { FaLeaf } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Container } from "../styles/Container.styled";
import { FooterCopyRight, StyledFooter } from "./Footer.styled";
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/LogoFooter.svg" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.
        </p>

        <NavLink exact="true" to="/" className="nav-active">
          Home
        </NavLink>
        <NavLink exact="true" to="/a-propos" className="nav-active">
          A propos de moi
        </NavLink>
        <NavLink exact="true" to="/atelier" className="nav-active">
          Mon atelier
        </NavLink>
        <NavLink exact="true" to="/contact" className="nav-active">
          Contact
        </NavLink>
        <SocialIcons />
        <FooterCopyRight>
          &copy; 2022 Chase The Line. Tous droits réservés{" "}
          <div>
            <FaLeaf />
          </div>
        </FooterCopyRight>
      </Container>
    </StyledFooter>
  );
}
