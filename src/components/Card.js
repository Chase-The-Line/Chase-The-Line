import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { title, body } }) {
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <hr />
        <p>{body}</p>
      </div>
    </StyledCard>
  );
}
