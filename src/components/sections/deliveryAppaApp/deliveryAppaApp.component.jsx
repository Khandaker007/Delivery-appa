import React from "react";

// COMPONENTS
import ButtonContainer from "../../shared/ButtonContainer/ButtonContainer.component";

// IMAGES
import mobileImage from "../../../assets/images/phone.png";

// CSS
import "./deliveryAppaApp.style.scss";

function DeliveryAppaApp(props) {
  return (
    <div className="app">
      <div className="img-container">
        <img src={mobileImage} alt="mobile" />
      </div>
      <div className="content">
        <h3>Download Delivery Appa App</h3>
        <ButtonContainer dark />
      </div>
    </div>
  );
}

export default DeliveryAppaApp;
