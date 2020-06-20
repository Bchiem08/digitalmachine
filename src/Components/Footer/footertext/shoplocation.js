import React, { Component } from "react";
import "./footertext.css";

export default class ShopLocationText extends Component {
  render() {
    return (
      <div className="footerbox">
        <header className="headertext">Shop Location</header>
        <header className="footertitle">Address</header>
        <p className="footerinfo">5303 36 St NW, </p>
        <p className="footerinfo">Edmonton, </p>
        <p className="footerinfo">AB T6B 3R6</p>
      </div>
    );
  }
}
