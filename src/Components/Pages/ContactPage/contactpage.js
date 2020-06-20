import React, { Component } from "react";
import "./contactpage.css";
import NavBarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";
import ContactPageText from "./contactpagetext";
import Grid from "@material-ui/core/Grid";
export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <NavBarExport />
        <div className="contactpage">
          <Grid>
            <Grid item>
              <ContactPageText />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
