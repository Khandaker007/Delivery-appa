import React from "react";

// ICONS
import femaleRider from "../../../assets/icons/skill_training.svg";
import lowCost from "../../../assets/icons/female_rider.svg";
import skillTraining from "../../../assets/icons/low_cost.svg";

import "./whatWeDo.style.scss";

function WhatWeDo(props) {
  return (
    <div className="what-we-do">
      <div className="heading">
        <h2>
          <span>What</span>
          <span>We Do...</span>
        </h2>
      </div>
      <div className="content">
        <div className="content__type">
          <img src={skillTraining} alt="icon" />
          <span>Skill Based Training</span>
        </div>
        <div className="content__type">
          <img src={femaleRider} alt="icon" />
          <span>Female Riders</span>
        </div>
        <div className="content__type">
          <img src={lowCost} alt="icon" />
          <span>Low Cost</span>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
