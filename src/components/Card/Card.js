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
  Links,
} from "./Card.styled";
import content from "../../data/content";

const Card = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };
  

  return (
    <Section
      smPadding="50px 10px"
      position="relative"
      inverse
      style={{
        background: "#eee",
      }}
    >
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>Bienvenue sur Chase The Line</FeatureTitle>
        </FeatureTextWrapper>
        <FeatureWrapper>
          {content.map((el, index) => (
            <Links href={el.link} key={index}>
              <FeatureColumn
                initial={initial}
                animate={animate}
                transition={{ duration: 0.5 + index * 0.1 }}
              >
                <FeatureImageWrapper className={el.imgClass}>
                  {el.icon}
                </FeatureImageWrapper>
                <FeatureName>{el.name}</FeatureName>
                <FeatureText>{el.description}</FeatureText>
              </FeatureColumn>
            </Links>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Card;
