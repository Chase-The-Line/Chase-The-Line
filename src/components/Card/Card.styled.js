import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px;
  border: 1px solid #fff;
  margin-top: 10px;
  width: 350px;
  cursor: pointer;
  

  &:hover {
    opacity: 0.8;
    background-color: #01312b;
    border: 1px solid #fff;
    transform: scale(0.98);
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

 

  h2 {
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    font-family: Libre Baskerville, serif;
    font-weight: 700;
    line-height: 132%;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 1);
    word-wrap: break-word;
   
  }
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Pcard = styled.p`
.p-card {
  
  margin: 2;
  color: #fff;
  font-size: 15px;
  line-height: 132%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;
}
`;


