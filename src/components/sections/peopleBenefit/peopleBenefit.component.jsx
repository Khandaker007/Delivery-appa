import React from "react";

// COMPONENTS
import Sliders from "../../shared/slider/Slider.component";

import "./peopleBenefit.style.scss";

function PeopleBenefit(props) {
  return (
    <div className="people-benefit" data-aos="fade-up">
      <h3 className="mb-5">
        <span>People benefitting through Project</span>
        <span>Delivery Appa</span>
      </h3>
      <Sliders color="purple" />
    </div>
  );
}

export default PeopleBenefit;
