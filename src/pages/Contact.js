import React from "react";
import { StyledContact } from "../components/styles/Contact.styled";
import BlackNav from "../components/core/BlackNav";
import { Container } from "../components/styles/Container.styled";
import { FaTwitter, FaGoogle, FaFacebook } from "react-icons/fa";
import { Flex } from "../components/styles/Flex.styled";
// import { useForm } from "react-hook-form";

// import saveData from "../data/data";

export default function Contact() {
  // const { register } = useForm();
  return (
    <StyledContact>
      <Container>
        <BlackNav />
        <Flex>
          <form>
            <h1>Inscrivez-vous à la Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut{" "}
            </p>
            <div className="group-1">
              {" "}
              <label className="email">Entrez votre adresse email</label>
              <input name="email" />
            </div>
            <div className="group-2">
              <label className="password">Entrez votre mot de passe</label>
              <input name="password" />
            </div>
            <button type="submit" className="login">
              Login
            </button>
            <p className="forgotPass">mot de passe oubliez ?</p>
            <p className="account">ou utilisez un autre compte</p>

            <button type="button" className="twitter">
              <a className="link" href="https://twitter.com/?logout=1649927322712">
                <FaTwitter />
              </a>
              Twitter
            </button>
            <button type="button" className="facebook">
              <a className="link" href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              Facebook
            </button>
            
              <a className="link" href="https://www.google.com/intl/fr/gmail/about/">
                <FaGoogle />
                <button type="button" className="google">
              Google
            </button>
            </a>
          </form>
        </Flex>
      </Container>
    </StyledContact>
  );
}
