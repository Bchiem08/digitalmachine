import React, { Component } from "react";
import "./Navbar.css";

export default class NavBar extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos";
    return (
      <div className="navbar">
        <nav className="navbarnavigation">
          <img
            src={imagePath + "/Digitalmachine.png"}
            alt="Digital Machine"
            className="logo"
          ></img>
          <div className="break"></div>
          <div className="navbaritems">
            <ul>
              <li>
                <a href="Home">Home</a>
              </li>
              <div className="navbarline"></div>
              <li>
                <a href="About">About</a>
              </li>
              <div className="navbarline"></div>
              <li>
                <a href="Services">Services</a>
              </li>
              <div className="navbarline"></div>
              <li>
                <a href="Photos">Photos</a>
              </li>
              <div className="navbarline"></div>
              <li>
                <a href="Contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
