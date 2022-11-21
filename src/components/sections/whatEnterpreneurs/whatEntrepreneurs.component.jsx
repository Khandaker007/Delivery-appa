import React from "react";

// COMPONENTS
import Sliders from "../../shared/slider/Slider.component";
import EntrepreneurCard from "../../shared/EntrepreneurCard/EntrepreneurCard.component";

import "./whatEntrepreneurs.style.scss";

function WhatEntrepreneurs(props) {
  return (
    <div className="what-entrepreneurs">
      <div className="heading-container">
        <h3>
          <span>What</span>
          <span> Entrepreneurs</span>
          <span> Say...</span>
        </h3>
      </div>
      <div className="vl"></div>
      <div className="slider-container">
        <Sliders color="white" enterpreneur entSlide />
      </div>
    </div>
  );
}

export default WhatEntrepreneurs;
