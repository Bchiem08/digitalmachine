import React, { Component } from "react";
import "./homepagesections.css";

export default class WhyChooseText extends Component {
  render() {
    return (
      <div style={{ marginLeft: "11%", marginTop: "72px" }}>
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
        <button className="homepage-button">Learn more</button>
      </div>
    );
  }
}
