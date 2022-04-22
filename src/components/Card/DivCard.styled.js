import { BiNews } from "react-icons/bi";
import { FaBicycle } from "react-icons/fa";
import { RiChat1Fill } from "react-icons/ri";
import styled from "styled-components";

export const StyledDivCard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || "row"};
  margin-top: 50px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;

export const CardContent = styled.div`
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const About = styled(RiChat1Fill)`
  color: #fff;
  font-size: 5rem;
`;
export const Bicycle = styled(FaBicycle)`
  color: #fff;
  font-size: 5rem;
`;
export const News = styled(BiNews)`
  color: #fff;
  font-size: 5rem;
`;

export const ContentIcon = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 2px solid #fff;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
