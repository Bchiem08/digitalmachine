import React, { Component } from "react";
import "./footertext.css";

export default class StoreHoursText extends Component {
  render() {
    return (
      <div className="footerbox">
        <header className="headertext">Store Hours</header>
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: "40px" }}>
            <p className="footerinfo">Monday:</p>
            <p className="footerinfo">Tuesday:</p>
            <p className="footerinfo">Wednesday:</p>
            <p className="footerinfo">Thursday:</p>
            <p className="footerinfo">Friday:</p>
            <p className="footerinfo">Saturday:</p>
            <p className="footerinfo">Sunday:</p>
          </div>
          <div>
            <p className="time">8a.m.-4:30p.m.</p>
            <p className="time">8a.m.-4:30p.m.</p>
            <p className="time">8a.m.-4:30p.m.</p>
            <p className="time">8a.m.-4:30p.m.</p>
            <p className="time">8a.m.-4:30p.m.</p>
            <p className="time">Closed</p>
            <p className="time">Closed</p>
          </div>
        </div>
      </div>
    );
  }
}
