import React from "react";
import { Container } from "components/styles/Container.styled";
// import { FaTwitter, FaGoogle, FaFacebook } from "react-icons/fa";
import { Flex } from "components/styles/Flex.styled";
// import { StyledDivCard } from "components/Card/DivCard.styled";
// import { useForm } from "react-hook-form";

export default function Contact() {
  return (
    <div>
      {" "}
      <Container>
        <Flex>
          {/* <StyledDivCard> */}
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
              {/* <div className="group-2">
          <label className="password">Entrez votre mot de passe</label>
          <input name="password" />
        </div> */}
              <button type="submit" className="login">
                Envoyer
              </button>

              {/* <p className="forgotPass">mot de passe oubliez ?</p>
        <p className="account">ou utilisez un autre compte</p>
        <a className="twitter" href="https://twitter.com">
          <FaTwitter /> Twitter
        </a>

        <a className="facebook" href="https://www.facebook.com">
          <FaFacebook /> Facebook
        </a>
        <a className="google" href="https://www.google.com">
          <FaGoogle /> Google
        </a> */}
            </form>
            <img
              src="./images/image.svg"
              alt=""
              height="525"
              className="image"
            />
          {/* </StyledDivCard> */}
        </Flex>
      </Container>
    </div>
  );
}
