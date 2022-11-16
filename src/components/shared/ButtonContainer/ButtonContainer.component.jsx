import React from "react";

// IMAGES
import playStore from "../../../assets/icons/play-store.svg";
import apple from "../../../assets/icons/apple.svg";
import appleBlack from "../../../assets/icons/apple-black.svg";

// CSS
import "./ButtonContainer.style.scss";

function ButtonContainer({ dark }) {
  return (
    <div className="btn-container">
      <button className={dark ? "btn btn-black" : "btn btn-white"}>
        <img src={playStore} alt="play-store icon" />
        Google Play
      </button>
      <button className={dark ? "btn btn-black" : "btn btn-white"}>
        <img src={dark ? appleBlack : apple} alt="apple icon" />
        App Store
      </button>
    </div>
  );
}

export default ButtonContainer;
