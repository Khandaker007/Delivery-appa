import React from "react";

// ICONS
import rightArrowPurple from "../../../assets/icons/right-arrow-purple.svg";
import leftArrowPurple from "../../../assets/icons/left-arrow-purple.svg";
import rightArrowWhite from "../../../assets/icons/right-arrow-white.svg";
import leftArrowWhite from "../../../assets/icons/left-arrow-white.svg";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// CSS
import "./SliderButton.style.scss";

function SliderButton({ type, color, onClick }) {
  return color === "purple" ? (
    <button type="button" className="arrow-btn" onClick={onClick}>
      {type === "next" ? (
        <img className="icon" src={rightArrowPurple} alt="arrow" />
      ) : (
        <img className="icon" src={leftArrowPurple} alt="arrow" />
      )}
    </button>
  ) : (
    <button type="button" className="arrow-btn" onClick={onClick}>
      {type === "next" ? (
        <img src={leftArrowWhite} alt="arrow" />
      ) : (
        <img src={rightArrowWhite} alt="arrow" />
      )}
    </button>
  );
}

export default SliderButton;
