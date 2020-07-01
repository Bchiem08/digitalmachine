import React from "react";
import "./sidedrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/aboutus"}>About</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/photos"}>Photos</Link>
        </li>
        <li>
          <Link to={"/contactus"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
