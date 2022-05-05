import styled from "styled-components";

export const StyledGallery = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  margin: 0;
  padding: 50px;
  box-sizing: border-box;

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      border-radius: 50px;
      box-sizing: border-box;
      /* box-shadow: 0px 42px 34px rgba(82, 67, 194, 0.3); */
    }
  }

  .grid-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-wrapper > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .grid-wrapper {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
  }
  .grid-wrapper .wide {
    grid-column: span 2;
  }
  .grid-wrapper .tall {
    grid-row: span 2;
  }
  .grid-wrapper .big {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
