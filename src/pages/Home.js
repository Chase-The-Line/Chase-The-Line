import { StyledHome } from "../components/styles/Home.styled";
import { Container } from "../components/styles/Container.styled";
import { Flex } from "../components/styles/Flex.styled";
import { Button } from "../components/styles/Button.styled";
import WhiteNav from "../components/core/WhiteNav";
import content from "../content";
import Card from "../components/Card";

export default function Home() {
  return (
    <StyledHome>
      <img src="./images/star-1.svg" alt="" className="star-1" />
      <Container>
        <WhiteNav />
        <img src="./images/divider.svg" alt="divider" />
        <Flex>
          <div>
            <h1>Conquer the forest</h1>
            <img src="./images/star-2.svg" alt="" className="star-2" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <Button>Découvrir</Button>
            <div>
              {" "}
              {content.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>
          <img src="./images/star-3.svg" alt="" className="star-3" />
        </Flex>
      </Container>
    </StyledHome>
  );
}
