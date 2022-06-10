import FooterMap from "components/Footer/FooterMap";
import Hero from "components/Hero/Hero";
import Card from "components/Card/Card";
import BlackNav from "components/Navbar/BlackNav"
import { Content } from "components/Content/Content";
import { heroOne, heroThree, heroTwo } from "data/Hero";

export default function Home() {
  return (
    <div>
      <BlackNav />
      <Hero />
      <Card/>
      <Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
      <FooterMap />
    </div>
  );
}
