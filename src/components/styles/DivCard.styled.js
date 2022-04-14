import styled from "styled-components";

export const StyledDivCard = styled.div`
  display: flex;
  flex-direction: ${({ layout }) => layout || "row"};
  margin-top: 50px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
