import React from "react";
import {
  Heading2,
  PricingCardFeature,
  PricingCardInfo,
  PricingCardPlan,
  WorkSection,
} from "./Workshop.styled";
import { Button, TextWrapper } from "Globalstyles";
import {
  IconsWorkshop,
  PricingCard,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardPers,
  PricingCardText,
  PricingCardTime,
  PricingContainer,
  PricingSection,
  PricingWrapper,
} from "components/Price/Rent.styled";
import workshopPrice from "data/workshopPrice";
import { IconContext } from "react-icons/lib";

export default function Work() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <WorkSection>
        <PricingSection id="pricing">
          <PricingWrapper>
            <Heading2 color="#fff">Mon atelier</Heading2>
            <TextWrapper
              mt="1.4rem"
              mb="1.4rem"
              weight="300"
              size="1.1rem"
              color="#fff"
              align="center"
            >
              Pas de jaloux tous les vélos peuvent venir à l'atelier !
              L'entretien de vos suspensions ? C'est aussi ici que ça se passe.
            </TextWrapper>
            <div>
              <PricingContainer>
                {workshopPrice.map((card, index) => (
                  <PricingCard key={index}>
                    <PricingCardInfo>
                      <IconsWorkshop> {card.icon}</IconsWorkshop>
                      <PricingCardPlan>{card.title}</PricingCardPlan>
                      <PricingCardTime>{card.time}</PricingCardTime>
                      <PricingCardPers>{card.pers}</PricingCardPers>
                      <hr />
                      <PricingCardText>{card.description}</PricingCardText>
                      <PricingCardFeatures>
                        {card.features.map((feature, index) => (
                          <PricingCardFeature key={index}>
                            {feature}
                            <PricingCardCost>{card.price}</PricingCardCost>
                            <PricingCardCost>{card.price2}</PricingCardCost>
                            <PricingCardCost>{card.price3}</PricingCardCost>
                          </PricingCardFeature>
                        ))}
                      </PricingCardFeatures>
                      <Button>Get Started</Button>
                    </PricingCardInfo>
                  </PricingCard>
                ))}
              </PricingContainer>
            </div>
          </PricingWrapper>
        </PricingSection>
      </WorkSection>
    </IconContext.Provider>
  );
}
