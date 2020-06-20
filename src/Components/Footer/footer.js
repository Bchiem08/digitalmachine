import React, { Component } from "react";
import "./footer.css";
import Grid from "@material-ui/core/Grid";
import ContactText from "./footertext/contact";
import ShopLocationText from "./footertext/shoplocation";
import ServiceAreaText from "./footertext/servicearea";
import StoreHourText from "./footertext/storehours";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Grid container className="footerinfobox">
          <Grid item>
            <ContactText />
          </Grid>
          <Grid item>
            <ShopLocationText />
          </Grid>
          <Grid item>
            <ServiceAreaText />
          </Grid>
          <Grid item>
            <StoreHourText />
          </Grid>
        </Grid>
      </div>
    );
  }
}
