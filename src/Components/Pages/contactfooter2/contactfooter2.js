import React, { Component } from "react";
import "./contactfooter2.css";
import { Link } from "react-router-dom";

export default class ContactFooter2 extends Component {
  render() {
    return (
      <div className="background">
        <div className="contactfooter-box">
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
