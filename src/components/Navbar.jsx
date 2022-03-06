import React from "react";
import "../css/Navbar.scss";
import NavBrand from "./NavBrand";
import Navigations from "./Navigations";

export default function Navbar(props) {
  return (
    <div className="navbar-container">
        <NavBrand />
        <Navigations navs={props.navs} />
    </div>
  );
}
