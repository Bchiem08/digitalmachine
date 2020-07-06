import React, { Component } from "react";
import "./aboutustext.css";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

export default class Quality extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos";

    return (
      <div style={{ marginBottom: "50px" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div style={{ marginLeft: "12%", marginTop: "150px" }}>
              <header className="aboutheader">Quality</header>
              <div className="textline" />
              <p className="about-text" style={{ maxWidth: "80%" }}>
                We have established, documented, implemented and maintained a
                quality management system. The company makes certain that our
                service and finished product consistently meets our customers
                specified needs.
              </p>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item md={6} lg={6} xl={6}>
              <img
                src={imagePath + "/quality2.png"}
                alt="quality"
                className="image"
              ></img>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    );
  }
}
