// import React from "react";
// import { IconPrices, StyledRent } from "./Rent.styled";
// import prices from "data/prices";

// export default function Prices() {
//   return (
//     <StyledRent>
//       {prices.map((price, nbrPers, subject, comment, choice, icon, id) => (
//         <div className="group">
//           <p className="price">{price}</p>
//           <IconPrices>{icon}</IconPrices>
//           <p className="txt-1">{nbrPers}</p>
//           <p className="txt-2">{subject}</p>
//           <p className="txt-3">{comment}</p>
//           <button>{choice}</button>
//         </div>
//       ))}
//     </StyledRent>
//   );
// }

/********************** */

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
            weight="300"
            size="1.1rem"
            color="black"
            align="center"
          >
            Veuillez choisir le plan qui vous convient.
          </TextWrapper>
          <TextWrapper
            weight="300"
            size="1.1rem"
            color="black"
            align="center"
          >
            Réservation uniquement par téléphone au 06 XX XX XX XX ou par email
            chasetheline@gmail.com
          </TextWrapper>
          <PricingContainer>
            {prices.map((card, index) => (
              <PricingCard key={index}>
                <PricingCardInfo>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
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
