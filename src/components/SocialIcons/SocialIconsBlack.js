import {  FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { StyledSocialIconsBlack } from "./SocialIconsBlack.styled";

export default function SocialIconsBlack() {
  return (
    <StyledSocialIconsBlack>
      <li>
        <a href="https://www.facebook.com/Chase.The.Linemaxdvst/">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://fr.ulule.com/saint-leo-a-velo-/">
          <FaGoogle />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/chasetheline.shop/">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIconsBlack>
  );
}
