import { Flex } from "components/styles/Flex.styled";
import { StyledCard, Pcard, CardTitle } from "./Card.styled";
import { CardContent, ContentIcon } from "./DivCard.styled";

export default function Card({ item: { title, body, id, icon, link } }) {
  return (
    <StyledCard>
      <a href={link} className="link">
        <CardContent>
          <Flex>
            <ContentIcon>{icon}</ContentIcon>
          </Flex>
          <CardTitle>{title}</CardTitle>
          <hr className="divider" />
          <Pcard>{body}</Pcard>
        </CardContent>
      </a>
    </StyledCard>
  );
}
