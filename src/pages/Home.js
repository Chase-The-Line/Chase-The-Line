import { StyledHome } from "components/Hero/Hero.styled";
import WhiteNav from "components/Navbar/WhiteNav";
import FooterMap from "components/Footer/FooterMap";
import Hero from "components/Hero/Hero";
import AboutMe from "components/About/AboutMe";

export default function Home() {
  return (
    <StyledHome>
      <WhiteNav />
      <Hero />
      <AboutMe />
      <FooterMap />
    </StyledHome>
  );
}
