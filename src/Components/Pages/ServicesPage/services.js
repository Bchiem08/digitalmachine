import React, { Component } from "react";
import NavbarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";
import "./services.css";

export default class ServicesPage extends Component {
  render() {
    return (
      <div>
        <NavbarExport />
        <div className="service-headerimage" />
        <div className="header-textbox">
          <header className="service-header">Services</header>
          <p className="service-text">
            We offer a range of services ar Digital Machine. Including milling
            and turning. Our group of expert machinist ensure the highest
            quality for all our clients.
          </p>
        </div>
        <div className="service-image" />

        <Footer />
      </div>
    );
  }
}
