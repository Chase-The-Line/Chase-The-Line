import React from "react";
import { Button, Heading2, TextWrapper } from "../../Globalstyles";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,
  PricingCardFeature,
  PricingCard,
  PricingCardPers,
  IconsWorkshop,
  PricingCardTime,
} from "./Rent.styled";

import prices from "data/prices";

export default function Prices({ icon, id }) {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
        <PricingWrapper>
          <Heading2 color="black">Grille tarifaire location</Heading2>
          <TextWrapper
            mt="1.4rem"
            mb="1.4rem"
            weight="500"
            size="1.1rem"
          >
            Veuillez choisir le plan qui vous convient. Réservation uniquement
            par téléphone au 06.71.41.23.26 ou par email
            chasetheline72@gmail.com
          </TextWrapper>
          <PricingContainer>
            {prices.map((card, index) => (
              <PricingCard key={index}>
                <PricingCardInfo>
                  <IconsWorkshop> {card.icon}</IconsWorkshop>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
                  <PricingCardTime>{card.time}</PricingCardTime>
                  <PricingCardPers>{card.pers}</PricingCardPers>
                  <hr />
                  <PricingCardText>{card.description}</PricingCardText>
                  <PricingCardFeatures>
                    {card.features.map((feature, index) => (
                      <PricingCardFeature key={index}>
                        {feature}
                      </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button>Get Started</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
