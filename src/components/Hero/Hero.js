import { Container } from "components/styles/Container.styled";
import { Flex } from "components/styles/Flex.styled";
import content from "data/content";
import Card from "components/Card/Card";
import { StyledDivCard } from "components/Card/DivCard.styled";
import {
  Btn,
  HeroContent,
  HeroContentText,
  HeroSubTitle,
  Text,
  Title,
} from "components/Hero/Hero.styled";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Button } from "../../Globalstyles";

export default function Hero() {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const handleClick = () => setClick(!click);
  // eslint-disable-next-line no-unused-vars
  const closeMenu = () => setClick(false);
  return (
    <div>
      <Container>
        <Flex>
          <img src="./images/star-1.svg" alt="" className="star-1" />
          <div>
            <HeroContent>
              <HeroContentText>
                <Title>Conquer the forest</Title>
                <HeroSubTitle>Lorem ipsum dolor sit amet</HeroSubTitle>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Text>
              </HeroContentText>
            </HeroContent>
            <Btn to="/">
              <Button primary big bigRadius>
                Découvrir
              </Button>
            </Btn>
            <StyledDivCard>
              {content.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </StyledDivCard>
          </div>
          <img src="./images/star-3.svg" alt="" className="star-3" />
        </Flex>
      </Container>
    </div>
  );
}
