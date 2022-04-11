import styled from "styled-components";

export const StyledHome = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  a {
    margin: 10px;
    padding: 10px;
    position: relative;
    color: #fff;
    text-decoration: none;
    margin-top: 30px;
    font-family: "Libre Baskerville", serif;
    font-size: 14px;
  }

  .nav-active {
    &::after {
      content: "";
      width: 85%;
      height: 5px;
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .star-1 {
    /* star-1 */

    position: absolute;
    width: 30px;
    height: 39px;
    left: 74.17px;
    top: 112.04px;

    opacity: 0.4;
    transform: rotate(-154.9deg);
  }

  .star-2 {
    /* star-2 */

    position: absolute;
    width: 20.79px;
    height: 26.92px;
    left: 1393.79px;
    top: 231.92px;

    opacity: 0.4;
    transform: rotate(-180deg);
  }

  .star-3 {
    /* star-3 */

    position: absolute;
    width: 20.79px;
    height: 26.92px;
    left: 192px;
    top: 825px;

    opacity: 0.4;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
    position: absolute;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
