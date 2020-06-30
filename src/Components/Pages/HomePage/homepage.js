import React, { Component } from "react";
import "./homepage.css";
import NavBarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";
import HomeCarousel from "../../HomepageCarousel/homecarousel";
import MachiningNeeds from "./Homepagesections/machiningneeds";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBarExport />
        <div className="homepage">
          <div style={{ marginBottom: "100px" }}>
            <HomeCarousel />
          </div>
          <MachiningNeeds />
          <div></div>
        </div>
        <Footer />
      </div>
    );
  }
}
