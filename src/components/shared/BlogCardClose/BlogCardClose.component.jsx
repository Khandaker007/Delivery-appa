import React from "react";

// IMAGES
import imageClose from "../../../assets/images/close.png";

// CSS
import "./blogCardClose.style.scss";

function BlogCardClose(props) {
  return (
    <div className="close-card">
      <div className="close-card__image-container">
        <img src={imageClose} alt="img" />
      </div>
      <div className="close-card__content-container">
        <div className="box-heading">
          <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4>
        </div>
        <hr />
        <div className="box">
          <span>01 December, 2022</span>
          <button>Read</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCardClose;
