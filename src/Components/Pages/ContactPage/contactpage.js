import React, { Component } from "react";
import "./contactpage.css";
import NavBarExport from "../../Navbar/NavbarExport";

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <NavBarExport />
        <div className="contactpage">
          <p>Kobe</p>
        </div>
      </div>
    );
  }
}
