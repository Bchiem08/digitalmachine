import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import SideDrawer from "./Components/SideDrawer/sidedrawer";
import Backdrop from "./Components/Backdrop/backdrop";
import Footer from "./Components/Footer/footer";

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
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar drawerClickHandler={this.drawerToggleClickHander} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Footer />
      </div>
    );
  }
}
