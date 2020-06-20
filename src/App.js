import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage/homepage";
import ContactPage from "./Components/Pages/ContactPage/contactpage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path={"/"} component={HomePage} />
          <Route path={"contactus"} component={ContactPage} />
        </Router>
      </div>
    );
  }
}
