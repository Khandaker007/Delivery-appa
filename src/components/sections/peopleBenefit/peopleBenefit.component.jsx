import React from "react";

// COMPONENTS
import SliderCard from "../../sliderCard/SliderCard.component";
import Sliders from "../../shared/slider/Slider.component";
import SliderButton from "../../shared/sliderButton/SliderButton.component";

import "./peopleBenefit.style.scss";

function PeopleBenefit(props) {
  return (
    <div className="people-benefit">
      <h3 className="mb-5">
        <span>People benefitting through Project</span>
        <span>Delivery Appa</span>
      </h3>
      <Sliders color="purple" />
    </div>
  );
}

export default PeopleBenefit;
