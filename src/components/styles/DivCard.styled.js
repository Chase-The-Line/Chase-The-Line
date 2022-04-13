import styled from "styled-components";

export const StyledDivCard = styled.div`

display: flex;

  flex-direction: ${({ layout }) => layout || "row"};
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;