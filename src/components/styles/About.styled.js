import styled from "styled-components";

export const StyledAbout = styled.header`
  background-color: #f3f5f6;
  padding: 20px 0;

  .avatar {
    display: flex;
    width: 192px;
    height: 192px;
    /* Divider/Primary */
    border: 3px solid #fff;
    border-radius: 200px;
  }

  .about {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }

  .name-infos {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .name {
    font-size: 24px;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    line-height: 120%;
    color: rgba(1, 49, 43, 1);
    text-align: center;
  }

  .text {
    width: 192px;
    height: 110px;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    line-height: 120%;
    color: #01312b;
  }

  h1 {
    font-family: Libre Baskerville, serif;
    font-size: 32px;
    line-height: 120%;
    color: #01312b;
  }

  h2 {
    display: flex;
    left: 305px;
    top: 518px;
    font-family: Libre Baskerville, serif;
    font-size: 20px;
    line-height: 120%;
    flex-direction: row;
  }

  p {
    display: flex;
    color: #000;
    text-align: justify;
    top: 75px;
    font-size: 15px;
    line-height: 140%;
  }
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
    font-family: Libre Baskerville, serif;
    font-size: 15px;
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

  .star-black-1 {
    /* star-1 */

    position: absolute;
    width: 30px;
    height: 39px;
    left: 74.17px;
    top: 112.04px;
    opacity: 0.4;
    transform: rotate(-154.9deg);
  }

  .star-black-2 {
    /* star-2 */

    position: absolute;
    width: 20.79px;

    right: 1393.79px;
    top: 231.92px;
    opacity: 0.4;
    transform: rotate(-180deg);
    color: #000;
  }

  .star-black-3 {
    /* star-3 */

    position: absolute;
    right: 192px;
    top: 825px;
    opacity: 0.4;
    color: #000;
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
