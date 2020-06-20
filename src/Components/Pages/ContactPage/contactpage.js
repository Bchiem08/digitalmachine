import React, { Component } from "react";
import "./contactpage.css";
import NavBarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";
import ContactPageText from "./contactpagetext";
import Grid from "@material-ui/core/Grid";
import ContactForm from "./contactform";
export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <NavBarExport />
        <div className="contactpage">
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <ContactPageText />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <ContactForm />
            </Grid>
          </Grid>
          <div style={{ height: "75px" }}></div>
        </div>
        <Footer />
      </div>
    );
  }
}
