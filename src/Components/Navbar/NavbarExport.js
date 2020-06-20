import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import SideDrawer from "../SideDrawer/sidedrawer";
import Backdrop from "../Backdrop/backdrop";

export default class NavBarExport extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHander = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar drawerClickHandler={this.drawerToggleClickHander} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}
