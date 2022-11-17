import React from "react";

// COMPONENT
import SliderCard from "../sliderCard/SliderCard.component";
import SliderButton from "../sliderButton/SliderButton.component";
import EntrepreneurCard from "../EntrepreneurCard/EntrepreneurCard.component";

// SLICK
import Slider from "react-slick";

// DATA
import sliderData from "./data";

// CSS
import "./slider.style.scss";
// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders({ color, entSlide, enterpreneur }) {
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
      <Slider
        {...sliderSettings}
        className={entSlide ? "arrow-bottom" : "arrow-center"}
      >
        {enterpreneur
          ? sliderData &&
            sliderData.map((data) => {
              return (
                <EntrepreneurCard
                  key={data.id}
                  comment={data.description}
                  img={data.image}
                  name={data.name}
                  designation={data.designation}
                />
              );
            })
          : sliderData &&
            sliderData.map((data) => {
              return (
                // <div>Hello {data.id}</div>
                <SliderCard
                  key={data.id}
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
