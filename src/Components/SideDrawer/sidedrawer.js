import React from "react";
import "./sidedrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="About">About</a>
        </li>
        <li>
          <a href="Services">Services</a>
        </li>
        <li>
          <a href="Photos">Photos</a>
        </li>
        <li>
          <a href="Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
