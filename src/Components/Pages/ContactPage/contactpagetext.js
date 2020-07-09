import React, { Component } from "react";
import "./contactpagetext.css";

export default class ContactPageText extends Component {
  render() {
    return (
      <div className="contactbox">
        <header className="contactheader">Contact Us</header>
        <p className="contact-title">Call Today or Leave a Message</p>
        <p className="contact-body">
          Have any questions? Interested in our company? Leave a message here to
          see what we can do for you.
        </p>
        <p className="contact-title-small">Digital Machine LTD</p>
        <p className="contact-body-address">
          5303 36 St NW, Edmonton, AB T6B 3R6
        </p>
        <p className="contact-title-small">
          Tel:{" "}
          <a href className="contact-body-address">
            780-440-9107
          </a>
        </p>
        <p className="contact-title-small">
          Email:{" "}
          <a href className="contact-body-address">
            dmltd@digitalmachine.ca
          </a>
        </p>
        <p className="contact-title-small">
          Open weekdays from 8a.m.- 4:30p.m.
        </p>
      </div>
    );
  }
}
