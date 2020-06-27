import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "photo 1",
    url: "Photos/building.png",
    alt: "Building",
  },
  {
    name: "photo 2",
    url: "Photos/building.png",
    alt: "Buildingd",
  },
  {
    name: "photo 3",
    url: "Photos/building.png",
    alt: "Buildings",
  },
];

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <div>
        <Slider {...settings}>
          {photos.map((photos) => {
            return (
              <div>
                <img width="100%" src={photos.url} alt="Map" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
