import React, { Component } from "react";
import "./homepagesections.css";
import WhyChooseText from "./whychoosetext";
import Grid from "@material-ui/core/grid";

export default class WhyChoose extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + "/photos";
    return (
      <div style={{ backgroundColor: "#E5E5E5", width: "100%" }}>
        <div className="box" style={{ marginTop: "100px" }}>
          <div style={{ height: "40px" }} />
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <header
                className="homepage-header"
                style={{ marginBottom: "15px" }}
              >
                Why choose digital machine?
              </header>
              <img
                src={imagePath + "/homepageworker.png"}
                alt="Worker"
                className="homeimage"
              ></img>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <WhyChooseText />
            </Grid>
          </Grid>
          <div style={{ height: "75px" }} />
        </div>
      </div>
    );
  }
}
