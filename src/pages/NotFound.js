import {
  ContentButton2,
  NotFoundSection,
} from "components/NotFound/NotFound.styled";
import React from "react";
import { useAnimation } from "framer-motion";
import { Section } from "Globalstyles";

const NotFound = ({ primary, inverse }) => {
  const initial = { opacity: 1, y: 30 };
  const animation = useAnimation();
  return (
    <NotFoundSection>
      <Section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="box"
                style={{
                  backgroundImage: "url(./images/forest.jpg)",
                }}
              >
                <div className="content">
                  <h1>404</h1>
                  <h3>Oops ! Cette page n'existe pas.</h3>
                  <p>
                    Votre recherche n’a pas pu aboutir. Veuillez cliquer sur le
                    bouton ci-dessous pour retourner à la page d’acceuil.
                    <br/>
                    <a href="/">
                      <ContentButton2
                        style={{
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        initial={initial}
                        transition={{ delay: 1, duration: 0.6 }}
                        animate={animation}
                        inverse={inverse}
                        primary={primary}
                      >
                        Home
                      </ContentButton2>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </NotFoundSection>
  );
};

export default NotFound;
