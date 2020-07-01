import React, { Component } from "react";
import NavbarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";
import Grid from "@material-ui/core/Grid";
import "./about.css";
import AboutUsText from "./aboutus/aboutustext";
import Quality from "./aboutus/quality";
import Service from "./aboutus/service";
import ContactFooter from "../../contactusfooter/contactfooter";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavbarExport />
        <div className="headerimage"></div>
        <Grid container>
          <Grid item>
            <AboutUsText />
          </Grid>
          <Grid item>
            <Quality />
            <Service />
          </Grid>
          <ContactFooter />
        </Grid>
        <Footer />
      </div>
    );
  }
}
