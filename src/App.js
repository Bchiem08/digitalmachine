import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import SideDrawer from "./Components/SideDrawer/sidedrawer";
import Backdrop from "./Components/Backdrop/backdrop";

export default class App extends Component {
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
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar drawerClickHandler={this.drawerToggleClickHander} />
        {sideDrawer}
        {backdrop}
      </div>
    );
  }
}
