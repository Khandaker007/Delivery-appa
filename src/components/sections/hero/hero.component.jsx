import React from "react";

// ICONS
import playStore from "../../../assets/icons/play-store.svg";
import apple from "../../../assets/icons/apple.svg";

// IMAGES
import heroImage from "../../../assets/images/hero.png";

import "./hero.style.scss";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__content--header">Delivering for Change</h1>
        <div className="hero__content--download-app">
          <p>Download Delivery Appa App</p>
          <div className="btn-container">
            <button className="btn">
              <img src={playStore} alt="play-store icon" />
              Google Play
            </button>
            <button className="btn">
              <img src={apple} alt="apple icon" />
              App Store
            </button>
          </div>
        </div>
      </div>
      <div className="hero__image">
        <img src={heroImage} alt="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
