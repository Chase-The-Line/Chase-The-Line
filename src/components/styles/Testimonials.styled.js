import styled from "styled-components";

export const StyledTestimonials = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  padding: 20px 0;

  p {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #514f6e;
  }

  .group-1 {
    box-sizing: border-box;
    width: 546.72px;
  }

  .group-2 {
    padding: 10px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(239, 240, 246, 1);
    box-shadow: 0px 5px 14px rgba(8, 15, 52, 0.04);
    height: 200px;
    display: flex;
    flex-direction: column;
  }

  .txt-1 {
    font-size: 18px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    color: rgba(1, 49, 43, 1);
    width: 235px;
    margin-bottom: 10px;
  }

  .txt-2 {
    font-size: 15px;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    color: rgba(111, 108, 144, 1);
    width: 235px;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 200px;
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
