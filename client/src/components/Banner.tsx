import React from "react";
import styled from "styled-components";
import Hero480 from "../assets/mobile-hero-480@2x.jpg";
import MobileHero2x from "../assets/mobile-hero@2x.jpg";
import Hero2x from "../assets/hero@2x.jpg";
import Hero from "../assets/hero.jpg";
import AppleAppStore from "../assets/apple-appstore.svg";
import GooglePlayStore from "../assets/google-playstore.png";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerPicture>
        <source media="(max-width: 480px)" srcSet={Hero480} />
        <source media="(max-width: 768px)" srcSet={MobileHero2x} />
        <source media="(min-width: 769px)" srcSet={Hero2x} />
        <img src={Hero} alt="banner" />
      </BannerPicture>
      <BannerText>
        <div>
          <div>
            <h1>
              BUY. SELL.
              <br />
              DISCOVER UNIQUE FASHION.
            </h1>
            <p>
              Designer. Preloved. Vintage. Streetwear. Sneakers. Whatever your
              style. Find it on Depop.
            </p>
            <div>
              <a href="#">
                <img className="apple-img" src={AppleAppStore} alt="" />
              </a>
              <a href="#">
                <img className="google-img" src={GooglePlayStore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </BannerText>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
  background-position: center center;
  background-color: rgb(114, 135, 215);
  background-size: cover;
`;
const BannerPicture = styled.picture`
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 100%;
    position: absolute;
  }
`;

const BannerText = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  --webkit-box-pack: center;
  justify-content: center;
  padding: 8rem 0rem;

  div {
    width: 100%;
    max-width: 80rem;
    margin: 0px auto;
    padding: 0 1rem;

    div {
      h1 {
        margin: 0;
        margin-bottom: 1.25rem;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2rem;
        line-height: 1.5;
        color: rgb(38, 38, 38);
      }
      p {
        margin: 0;
        margin-bottom: 1.5rem;
        max-width: 31.5rem;
        font-weight: normal;
        font-size: 0.875rem;

        color: rgb(38, 38, 38);
      }
      div {
        display: flex;
        padding: 0;
        a {
          display: block;
          margin: 0;
          width: 120px;
          margin-right: 1.25rem;
          img {
            display: block;
            width: 100%;
            object-fit: cover;
          }
          .google-img {
            height: 40px;
          }
        }
      }
    }
  }
`;
