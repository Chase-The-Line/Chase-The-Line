import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const NotFoundSection = styled.header`
  .home {
    padding: 0;
  }

  .home .box {
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-size: cover !important;
    background-position: center !important;
    justify-content: center;
    padding: 2rem 9%;
  }

  .home .box.second {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .home .box .content {
    width: 50rem;
  }

  .home .box .content h1 {
    font-size: 100px;
    color: #fff;
    font-weight: 900;
    text-align: center;
  }

  .home .box .content h3 {
    font-size: 60px;
    color: #fff;
    padding-top: 0.5rem;
    text-transform: uppercase;
    text-align: center;
  }

  .home .box .content p {
    line-height: 2;
    color: #fff;
    font-size: 1.2rem;
    padding: 1rem 0;
    text-align: center;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 3rem;
    color: #10221b;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 3rem;
    color: #10221b;
  }

  @media (max-width: 991px) {
    html {
      font-size: 55%;
      scroll-padding-top: 7rem;
    }
    .home .box {
      padding: 2rem;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background-position: right !important;
    }
    .home .box.second {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background-position: left !important;
    }
    .home .box .content {
      text-align: center;
    }
    .home .box .content span {
      font-size: 3rem;
    }
    .home .box .content h3 {
      font-size: 4rem;
    }
  }
`;

export const ContentButton2 = styled(motion.button)`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${({ inverse }) => (inverse ? "#003333" : "white")};
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid ${({ inverse }) => (inverse ? "#003333" : "white")};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    background: ${({ inverse }) => (inverse ? "#003333" : "white")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: ${({ inverse }) => (inverse ? "white" : "#219150")};
  }
`;

export const HeroText = styled.p`
  margin-top: 10px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;
