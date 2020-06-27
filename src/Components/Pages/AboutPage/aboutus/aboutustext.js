import React, { Component } from "react";
import "./aboutustext.css";

export default class AboutUsText extends Component {
  render() {
    return (
      <div className="about-textbox">
        <header className="aboutheader">Digital Machine</header>
        <p className="about-text">
          here at Digital Machine, we pride ourselves in providing excellent
          quality and service with all our customers. Founded June 2000, in
          Edmonton. Our 75000 square foot facility houses fully capable
          production machine shop with CNC turning and milling centers, various
          manual operated equipment, and a 20 ton crane lift capability.
        </p>
        <div style={{ height: "50px" }} />
        <div className="aboutline"></div>
      </div>
    );
  }
}
