import React, { Component } from "react";
import "./homepagesections.css";

export default class OurShop extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos";

    return (
      <div>
        <div className="box">
          <div style={{ height: "40px" }} />
          <header className="homepage-header">Our Shop</header>
          <div />
          <p className="homepage-text">
            Our new 75000 square foot facility house out CNC turning and milling
            centers. With over 20 machines and 20 ton crane lift capability, we
            are capable of taking on a wide range of projects.
          </p>
        </div>
        <img
          src={imagePath + "/homeshop2.png"}
          alt="shop"
          className="ourshop-image"
        ></img>
      </div>
    );
  }
}
