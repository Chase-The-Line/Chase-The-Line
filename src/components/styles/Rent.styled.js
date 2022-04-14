import styled from "styled-components";

export const StyledRent = styled.header`
  background-color: ${({ theme }) => theme.colors.body};
  padding: 20px 0;
`;

export const BlackNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  a {
    margin: 10px;
    padding: 10px;
    position: relative;
    color: #000;
    text-decoration: none;
    margin-top: 30px;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
      transform: scale(0.98);
      background-color: ${({ bg }) => bg || "#40A339"};
      color: ${({ color }) => color || "#fff"};
      border-radius: 50px;
    }
  }
`;
