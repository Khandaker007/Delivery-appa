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
      <div className="vl"></div>
      <div className="content">
        <div className="content__type">
          <img src={skillTraining} alt="icon" />
          <div className="box">
            <span>Skill Based Training</span>
            <p>
              Project DeliveryAppa is a social initiative by Green Ink to
              empower the marginalized women living in rural areas by providing
              them with skill based training and unique employment
              opportunities.
            </p>
          </div>
        </div>
        <div className="content__type">
          <img src={femaleRider} alt="icon" />
          <div className="box">
            <span>Female Riders</span>
            <p>
              DeliveryAppa is an android based mobile application that employs
              female riders to conduct delivery services of goods from point A
              to point B in rural areas. 
            </p>
          </div>
        </div>
        <div className="content__type">
          <img src={lowCost} alt="icon" />
          <div className="box">
            <span>Low Cost</span>
            <p>
              Project DeliveryAppa caters to the delivery needs of the local
              aspiring entrepreneurs and small businesses by delivering their
              products to their customers or consumers at a very affordable cost
              of BDT 20 per delivery. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
