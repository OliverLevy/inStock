import React from "react";
import Logo from "../../assets/logo/Logo-instock.svg";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  console.log("hi")
  console.log()
  return (
    <div className="nav">
      <Link to="/">
        <img className="nav__logo" src={Logo} alt="InStock Logo" />
      </Link>
      <div className="nav__item-container">
        <div className="nav__link-container">
          <Link to="/inventory" className="nav__link--active">
            <h3>Inventory</h3>
          </Link>
        </div>
        <div className="nav__link-container">
          <Link to="/warehouses" className="nav__link">
            <h3>Locations</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
