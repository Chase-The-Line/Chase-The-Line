import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
