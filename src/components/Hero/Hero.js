import { ContentButton } from "components/Content/ContentStyles";
import React from "react";
import { HeroSection } from "./Hero.styled";
import { useAnimation } from "framer-motion";
import { Section } from "Globalstyles";

const Hero = ({ primary, inverse }) => {
  const initial = { opacity: 1, y: 30 };
  const animation = useAnimation();

  return (
    <HeroSection>
      <Section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="box"
                style={{
                  backgroundImage: "url(./images/landscape.jpg)",
                }}
              >
                <div className="content">
                  <span>Explorer et ...</span>
                  <h3>Conquer the forest</h3>
                  <p>
                    Venez découvrir le coeur des aples mancelles en VTT à
                    assistance éléctrique ainsi que l'atelier pour l'entretien
                    de vos vélos et vos suspensions.
                  </p>
                  <a  href="https://chasetheline.fr/#/location">
                    <ContentButton
                      initial={initial}
                      transition={{ delay: 1, duration: 0.6 }}
                      animate={animation}
                      inverse={inverse}
                      primary={primary}
                    >
                      Découvrir
                    </ContentButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </HeroSection>
  );
};

export default Hero;
