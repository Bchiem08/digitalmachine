import React, { Component } from "react";
import "./contactfooter.css";

export default class ContactFooter extends Component {
  render() {
    return (
      <div className="background">
        <div className="contact-box">
          <header className="contactheader">Have any Questions?</header>
          <p className="contact-text">Feel free to contact us here</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    );
  }
}
