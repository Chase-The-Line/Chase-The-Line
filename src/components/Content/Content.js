import React, { useEffect } from "react";
import { Container, Section } from "../../Globalstyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
  Subtitle2,
} from "./ContentStyles.js";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  buttonLabel2,
  buttonLabel3,
  img,
  alt,
  inverse,
  reverse,
  linkTo,
  quote,
  link
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <Section inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <Subtitle2
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {quote}
              </Subtitle2>
              {/* <a target="_blank" rel="noreferrer" href={linkTo}> */}
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
                primary={primary}
              >
                <a className="link" target="_blank" rel="noreferrer" href={linkTo}>
                  {buttonLabel}
                </a>
                <a className="link" href={link}>
                  {buttonLabel2}
                </a>
                <a className="link" href={link}>
                  {buttonLabel3}
                </a>
              </ContentButton>
              {/* </a> */}
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
