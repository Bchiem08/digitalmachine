import React, { Component } from "react";
import "./homepagesections.css";
import { Link } from "react-router-dom";

export default class MachiningNeeds extends Component {
  render() {
    return (
      <div className="box">
        <header className="homepage-header">
          Contact us for all your general machining needs
        </header>
        <div className="homepage-line" />
        <p className="homepage-text">
          Since 2000 we have put our clients first. We keep out quality
          standards high and provide the best consistency. Our quality
          management system is established to ensure our clients only get the
          best quality.
        </p>
        <div style={{ height: "2%" }} />
        <Link to={"/contactus"}>
          <button className="homepage-button">Contact Us</button>
        </Link>
        <div style={{ height: "3%" }} />
      </div>
    );
  }
}
