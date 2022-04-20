import React from "react";
import { StyledTestimonials } from "./styles/Testimonials.styled";
import { Container } from "components/styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

export default function Testimonials() {
  return (
    <StyledTestimonials>
      <Container>
        <Flex>
          <div className="group-1">
            <div className="group-2">
              <div className="flex-col">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  quis nostrud exercitation ullamco
                </p>
                <img src="./images/mairie.svg" alt="avatar" />
                <p className="txt-1">lorem ipsum</p>
                <p className="txt-2">lorem ipsum</p>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </StyledTestimonials>
  );
}
