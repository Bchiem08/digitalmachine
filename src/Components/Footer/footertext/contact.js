import React, { Component } from "react";
import "./footertext.css";

export default class ContactText extends Component {
  render() {
    return (
      <div>
        <header className="headertext">Contact</header>
        <header className="footertitle">Email</header>
        <p className="footerinfo">something@mail.com</p>
        <br></br>
        <header className="footertitle">Phone</header>
        <p className="footerinfo">780-440-9107</p>
      </div>
    );
  }
}
