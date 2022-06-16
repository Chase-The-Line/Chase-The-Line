import { FaFacebook, FaInstagram } from "react-icons/fa";
import { StyledSocialIconsBlack } from "./SocialIconsBlack.styled";
import { Icon } from "@iconify/react";

export default function SocialIconsBlack() {
  return (
    <StyledSocialIconsBlack>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/Chase.The.Linemaxdvst/"
        >
          <FaFacebook />
        </a>
      </li>
      <li>
      <a
          target="_blank"
          rel="noreferrer"
          href="https://odysee.com/@chasetheline:e?r=CP6hvkp8AuNgY4Z1ZGRGDm3P7Afg6tKc"
        >
          <Icon icon="simple-icons:odysee" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/chasetheline.shop/"
        >
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIconsBlack>
  );
}
