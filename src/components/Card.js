import { StyledCard, Pcard } from "./styles/Card.styled";

export default function Card({ item: { title, body } }) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <hr />
        <Pcard>{body}</Pcard>
      </div>
    </StyledCard>
  );
}
