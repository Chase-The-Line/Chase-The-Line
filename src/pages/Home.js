import { StyledHome } from "components/Hero/Hero.styled";
import WhiteNav from "components/Navbar/WhiteNav";
import FooterMap from "components/Footer/FooterMap";
import Hero from "components/Hero/Hero";

export default function Home() {
  return (
    <StyledHome>
      <WhiteNav />
      <Hero />
      <FooterMap />
    </StyledHome>
  );
}
