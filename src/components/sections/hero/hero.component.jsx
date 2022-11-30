import React from "react";

// COMPONENTS
import ButtonContainer from "../../shared/ButtonContainer/ButtonContainer.component";

// IMAGES
import heroImage from "../../../assets/images/hero.png";

import "./hero.style.scss";

function Hero(props) {
  return (
    <div className="hero">
      {/* layout start */}
      <div className="hero__layout"></div>
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
