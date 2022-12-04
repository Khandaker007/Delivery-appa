import React from "react";

// COMPONENTS
import Sliders from "../../shared/slider/Slider.component";

import "./whatEntrepreneurs.style.scss";

function WhatEntrepreneurs(props) {
  return (
    <div className="what-entrepreneurs">
      <div className="heading-container" data-aos="fade-right">
        <h3>
          <span>What</span>
          <span> Entrepreneurs</span>
          <span> Say...</span>
        </h3>
      </div>
      <div className="vl" data-aos="fade-up"></div>
      <div className="slider-container" data-aos="fade-left">
        <Sliders color="white" enterpreneur entSlide />
      </div>
    </div>
  );
}

export default WhatEntrepreneurs;
