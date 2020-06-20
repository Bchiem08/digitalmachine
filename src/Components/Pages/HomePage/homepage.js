import React, { Component } from "react";
import "./homepage.css";
import NavBarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBarExport />
        <div className="homepage">
          <header>Kobe</header>
          <div style={{ height: "2000px" }}></div>
        </div>
        <Footer />
      </div>
    );
  }
}
