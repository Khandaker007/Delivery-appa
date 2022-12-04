import React from "react";

// IMAGES
import imageOpen from "../../../assets/images/open.png";

// CSS
import "./blogCardOpen.style.scss";

function BlogCardOpen(props) {
  return (
    <div className="open-card" data-aos="fade-right">
      <div className="open-card__image-container">
        <img src={imageOpen} alt="img" />
      </div>
      <h2 className="open-card__heading">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
      </h2>
      <p className="open-card__description">
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in{" "}
      </p>
      <button className="open-card__btn">Read</button>
    </div>
  );
}

export default BlogCardOpen;
