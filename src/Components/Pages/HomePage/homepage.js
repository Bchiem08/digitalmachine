import React, { Component } from "react";
import "./homepage.css";
import NavBarExport from "../../Navbar/NavbarExport";
import Link from "@material-ui/core/Link";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/contactus">
          <NavBarExport />
        </Link>
      </div>
    );
  }
}
