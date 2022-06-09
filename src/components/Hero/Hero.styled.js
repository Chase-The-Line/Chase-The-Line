import styled from "styled-components";

export const HeroSection = styled.section`
  .home {
    padding: 0;
  }

  .home .box {
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-size: cover !important;
    background-position: center !important;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: center;
    padding: 2rem 9%;
  }

  .home .box.second {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .home .box .content {
    width: 50rem;
  }

  .home .box .content span {
    font-size: 40px;
    color: #fff;
  }

  .home .box .content h3 {
    font-size: 60px;
    color: #219150;
    padding-top: 0.5rem;
    text-transform: uppercase;
  }

  .home .box .content p {
    line-height: 2;
    color: #fff;
    font-size: 1.2rem;
    padding: 1rem 0;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 3rem;
    color: #10221b;
  }

  .btn {
    margin-top: 1rem;
    display: inline-block;
    border: 0.2rem solid #10221b;
    color: #10221b;
    cursor: pointer;
    background: none;
    font-size: 1.7rem;
    padding: 1rem 3rem;
  }

  .btn:hover {
    background: #10221b;
    color: #fff;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 3rem;
    color: #10221b;
  }

  @media (max-width: 991px) {
    html {
      font-size: 55%;
      scroll-padding-top: 7rem;
    }
    .home .box {
      padding: 2rem;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background-position: right !important;
    }
    .home .box.second {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background-position: left !important;
    }
    .home .box .content {
      text-align: center;
    }
    .home .box .content span {
      font-size: 3rem;
    }
    .home .box .content h3 {
      font-size: 4rem;
    }
  }
`;
