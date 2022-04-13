import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 4px;
  padding: 6px;
  border: 1px solid #fff;
  flex-direction: ${({ layout }) => layout || "row"};
  margin-top: 10px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 0.8;
    background-color: #01312b;
    border: 1px solid #01312b;
    transform: scale(0.98);
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  p {
    margin: 0;
    color: #fff;
    font-size: 13px;
    line-height: 132%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 2px;
  }

  h2 {
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-size: 14px;
    font-family: Libre Baskerville, serif;
    font-weight: 700;
    line-height: 132%;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 1);
    word-wrap: break-word;
    opacity: 0.6;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
