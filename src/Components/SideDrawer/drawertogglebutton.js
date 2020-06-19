import React from "react";

import "./drawertoggle.css";

const DrawerToggleButton = (props) => (
  <button className="togglebutton" onClick={props.click}>
    <div className="togglebutton-line"></div>
    <div className="togglebutton-line"></div>
    <div className="togglebutton-line"></div>
  </button>
);

export default DrawerToggleButton;
