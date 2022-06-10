import styled from "styled-components";

export const PricingCardInfo = styled.div`
  background: #003333;
  box-shadow: 0 6px 20px rgba(107, 142, 35, 0.2);
  width: 280px;
  text-decoration: none;
  border-radius: 4px;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: #fff;
  margin: auto;
  > button {
    margin-top: auto;

    &:hover {
      color: black;
      background: white;
      transition: background 0.3s ease;
    }
  }
`;

export const TextWrapper2 = styled.span`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  text-align: center;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 1rem;
  display: flex;
  font-size: 0.94rem;

  &:before {
    content: "⚙️";
    margin-right: 0.4rem;
  }
`;

export const Heading2 = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$fff" : "#fff")};
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const PricingCardPlan = styled.h3`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

export const WorkSection = styled.header`
  background-image: url("./images/chaine.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: clamp(70px, 25vh, 150px);
  margin-bottom: -54px;
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  .link {
    text-decoration: none;
    color: #000;
  }
`;

export const WorkContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
