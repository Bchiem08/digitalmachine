import React, { Component } from "react";
import NavbarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";
import "./photos.css";

export default class PhotosPage extends Component {
  render() {
    return (
      <div>
        <NavbarExport />
        <div className="photospage-background">
          <div className="photos-headerbox">
            <header className="photos-header">Photos</header>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
