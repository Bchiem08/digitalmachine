import React, { Component } from "react";
import "./homepage.css";
import NavBarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";
import HomeCarousel from "../../HomepageCarousel/homecarousel";
import MachiningNeeds from "./Homepagesections/machiningneeds";
import WhyChoose from "./Homepagesections/whychoose";
import OurShop from "./Homepagesections/ourshop";
import ContactFooter2 from "../contactfooter2/contactfooter2";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBarExport />
        <div className="homepage">
          <div style={{ paddingBottom: "6%" }}>
            <HomeCarousel />
          </div>
          <MachiningNeeds />
          <WhyChoose />
          <OurShop />
          <ContactFooter2 />
        </div>
        <Footer />
      </div>
    );
  }
}
