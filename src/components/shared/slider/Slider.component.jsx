import React from "react";

// COMPONENT
import SliderCard from "../../sliderCard/SliderCard.component";
import SliderButton from "../sliderButton/SliderButton.component";

// SLICK
import Slider from "react-slick";

// DATA
import sliderData from "./data";

// CSS
import "./slider.style.scss";
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders({ color, entSlide }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    appendArrows: ".slider-arrow",
    nextArrow: <SliderButton color={color} type="next" />,
    prevArrow: <SliderButton color={color} type="prev" />,
  };

  return (
    <div className="slider">
      <Slider {...sliderSettings} className={entSlide ? "" : "slick-slider"}>
        {sliderData &&
          sliderData.map((data) => {
            return (
              <SliderCard
                comment={data.description}
                img={data.image}
                name={data.name}
                designation={data.designation}
              />
            );
          })}
      </Slider>
    </div>
  );
}

export default Sliders;
