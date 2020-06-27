import React, { Component } from "react";
import "./contactfooter.css";
import { Link } from "react-router-dom";

export default class ContactFooter extends Component {
  render() {
    return (
      <div className="background">
        <div className="contact-box">
          <header className="contactheader">Have any Questions?</header>
          <p className="contact-text">Feel free to contact us here</p>
          <Link to={"/contactus"}>
            <button className="contact-button">Contact Us</button>
          </Link>
        </div>
      </div>
    );
  }
}
