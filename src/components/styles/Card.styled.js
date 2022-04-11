import styled from "styled-components";

export const StyledCard = styled.div`
  display: grid;
  align-items: center;
  background-color: #fff;
  /* opacity: 0.1; */
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  border: 2px solid white;
  flex-direction: ${({ layout }) => layout || "row"};

  & > div {
    flex: 1;
  }

  p {
    margin: 0;
  }
/* 
  .flex-row {
    display: flex;
    flex-direction: row;
  } */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
