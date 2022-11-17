import React from "react";

// COMPONENTS
import ButtonContainer from "../../shared/ButtonContainer/ButtonContainer.component";

// ICONS
import playStore from "../../../assets/icons/play-store.svg";
import apple from "../../../assets/icons/apple.svg";

// IMAGES
import heroImage from "../../../assets/images/hero.png";
import heroLayout from "../../../assets/layout/hero-layout.svg";

import "./hero.style.scss";

function Hero(props) {
  return (
    <div className="hero">
      {/* layout start */}
      <div className="hero__layout"></div>
      {/* <img className="hero__layout" src={heroLayout} alt="layout" /> */}
      {/* layout end */}
      <div className="hero__content">
        <h1 className="hero__content--header">Delivering for Change</h1>
        <div className="hero__content--download-app">
          <p>Download Delivery Appa App</p>
          <ButtonContainer />
        </div>
      </div>
      <div className="hero__image">
        <img src={heroImage} alt="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
