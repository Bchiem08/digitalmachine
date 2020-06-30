import React, { Component } from "react";
import "./contactfooter2.css";
import { Link } from "react-router-dom";

export default class ContactFooter2 extends Component {
  render() {
    return (
      <div className="background">
        <div className="contactfooter2-box">
          <header className="contactheader2">Have any Questions?</header>
          <p className="contact-text2">Feel free to contact us here</p>
          <Link to={"/contactus"}>
            <button className="contact2-button">Contact Us</button>
          </Link>
        </div>
      </div>
    );
  }
}
