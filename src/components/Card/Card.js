// import { Flex } from "components/styles/Flex.styled";
// import { StyledCard, Pcard, CardTitle } from "./Card.styled";
// import { CardContent, ContentIcon } from "./DivCard.styled";

// export default function Card({ item: { title, body, id, icon, link } }) {
//   return (
//     <StyledCard>
//       <a href={link} className="link">
//         <CardContent>
//           <Flex>
//             <ContentIcon>{icon}</ContentIcon>
//           </Flex>
//           <CardTitle>{title}</CardTitle>
//           <hr className="divider" />
//           <Pcard>{body}</Pcard>
//         </CardContent>
//       </a>
//     </StyledCard>
//   );
// }

import React from "react";
import { Container, Section } from "../../Globalstyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
  FeatureTag,
} from "./Card.styled";
// import { featuresData } from '../../data/FeaturesData';
import content from "../../data/content";

const Card = (linkTo, id) => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="a-propos">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>Bienvenue sur Chase The Line</FeatureTitle>
        </FeatureTextWrapper>
        <a href={linkTo} className="link">
          <FeatureWrapper>
            {content.map((el, index) => (
              <FeatureColumn
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5 + index * 0.1 }}
                key={index}
              >
                <FeatureImageWrapper className={el.imgClass}>
                  {el.icon}
                </FeatureImageWrapper>
                <FeatureName>{el.name}</FeatureName>
                <FeatureText>{el.description}</FeatureText>
              </FeatureColumn>
            ))}
          </FeatureWrapper>
        </a>
      </Container>
    </Section>
  );
};

export default Card;
