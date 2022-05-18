import React from "react";
import { IconPrices, StyledRent } from "./Rent.styled";


export default function Prices({
  item: { price, nbrPers, subject, comment, choice, icon, id },
}) {
  return (
    <StyledRent>
      {/* <div
        className="easyloisirs_module"
        data-hash="5a819170bb53e8f0cd280e806ad6835af3b5bf04"
      > */}
        <div className="group">
          <p className="price">{price}</p>
          <IconPrices>{icon}</IconPrices>
          <p className="txt-1">{nbrPers}</p>
          <p className="txt-2">{subject}</p>
          <p className="txt-3">{comment}</p>
          <button>{choice}</button>
        </div>
      {/* </div> */}
    </StyledRent>
  );
}

// import React from 'react';
// import { Button, Heading, TextWrapper } from '../../globalStyles';
// import { IconContext } from 'react-icons/lib';
// import {
// 	PricingSection,
// 	PricingWrapper,
// 	PricingContainer,
// 	PricingCardInfo,
// 	PricingCardPlan,
// 	PricingCardCost,
// 	PricingCardFeatures,
// 	PricingCardText,
// 	PricingCardFeature,
// 	PricingCard,
// } from './PricingStyles';
// import { pricingData } from '../../data/PricingData';

// function Prices() {
// 	return (
// 		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
// 			<PricingSection id="pricing">
// 				<PricingWrapper>
// 					<Heading>Pick Your Best Option</Heading>

// 					<TextWrapper
// 						mb="1.4rem"
// 						weight="600"
// 						size="1.1rem"
// 						color="white"
// 						align="center"
// 					>
// 						Create, maintain and store your data with Delta.
// 					</TextWrapper>
// 					<PricingContainer>
// 						{pricingData.map((card, index) => (
// 							<PricingCard key={index}>
// 								<PricingCardInfo>
// 									<PricingCardPlan>{card.title}</PricingCardPlan>
// 									<PricingCardCost>{card.price}</PricingCardCost>
// 									<PricingCardText>{card.description}</PricingCardText>
// 									<PricingCardFeatures>
// 										{card.features.map((feature, index) => (
// 											<PricingCardFeature key={index}>
// 												{feature}
// 											</PricingCardFeature>
// 										))}
// 									</PricingCardFeatures>
// 									<Button>Get Started</Button>
// 								</PricingCardInfo>
// 							</PricingCard>
// 						))}
// 					</PricingContainer>
// 				</PricingWrapper>
// 			</PricingSection>
// 		</IconContext.Provider>
// 	);
// }
// export default Prices;
