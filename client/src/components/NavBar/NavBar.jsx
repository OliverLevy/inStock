import React from "react";
import Logo from "../../assets/logo/Logo-instock.svg";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/" className="nav__logo-link">
        <img className="nav__logo" src={Logo} alt="InStock Logo" />
      </NavLink>
      <div className="nav__item-container">
        <div className="nav__link-container">
          <NavLink
            strict
            to="/inventory"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            <h3>Inventory</h3>
          </NavLink>
        </div>
        <div className="nav__link-container">
          <NavLink
            strict
            to="/warehouses"
            className="nav__link"
            activeClassName="nav__link--active"
            isActive={(match, location) => {
              if (!match && location.pathname !== "/"){
                return false
              } else {
                return true
              }
            }}
            >
            <h3>Locations</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
