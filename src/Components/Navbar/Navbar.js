import React, { Component } from "react";
import "./Navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="navbar">
            <li className="navbarlist">
              <a href="Home" className="navbaritems">
                Home
              </a>
            </li>
            <li className="navbarlist">
              <a href="About" className="navbaritems">
                {" "}
                About
              </a>
            </li>
            <li className="navbarlist">
              <a href="Services" className="navbaritems">
                Services
              </a>
            </li>
            <li className="navbarlist">
              <a href="Photos" className="navbaritems">
                Photos
              </a>
            </li>
            <li className="navbarlist">
              <a href="Contact" className="navbaritems">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
