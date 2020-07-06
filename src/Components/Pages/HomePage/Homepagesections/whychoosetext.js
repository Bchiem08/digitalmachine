import React, { Component } from "react";
import "./homepagesections.css";
import { Link } from "react-router-dom";

export default class WhyChooseText extends Component {
  render() {
    return (
      <div className="whychoose">
        <header className="subheader">Quality</header>
        <p className="subtext">
          we pride ourselves in providing the best quality to our clients.
        </p>
        <header className="subheader">Service</header>
        <p className="subtext">
          we pride ourselves in providing the best quality to our clients.
        </p>
        <header className="subheader">Expertise</header>
        <p className="subtext">
          we pride ourselves in providing the best quality to our clients.
        </p>
        <Link to={"/aboutus"}>
          <button className="homepage-button">Learn more</button>
        </Link>
      </div>
    );
  }
}
