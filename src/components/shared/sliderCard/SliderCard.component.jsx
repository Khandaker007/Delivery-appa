import React from "react";

// CSS
import "./sliderCard.style.scss";

function SliderCard({ comment, img, name, designation }) {
  return (
    <div className="slider-card">
      <div className="slider-card__comment">
        <p>{comment}</p>
      </div>
      <hr></hr>
      <div className="slider-card__person">
        <div className="image-container mb-1">
          <img
            src={require(`../../../assets/images/${img}`)}
            alt="person img"
          />
        </div>
        <span className="name">{name}</span>
        <span className="designation">{designation}</span>
      </div>
    </div>
  );
}

export default SliderCard;
