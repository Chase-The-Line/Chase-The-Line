import {  FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { StyledSocialIcons } from "./SocialIcons.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
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
    </StyledSocialIcons>
  );
}
