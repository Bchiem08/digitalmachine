import React, { Component } from "react";
import "./aboutustext.css";
import Grid from "@material-ui/core/Grid";

export default class Service extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos";

    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img
              src={imagePath + "/service2.png"}
              alt="service"
              className="image"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="description-text">
              <header className="aboutheader">Service</header>
              <div className="textline" />
              <p className="about-text" style={{ maxWidth: "80%" }}>
                to ensure the best service, we make sure communicate via email,
                fax, or verbal conversation with the client. We provide the
                client with the following documents, Customer blueprint,
                specfied raw materal, designated CNC program, and Operations
                traveler sheet.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
