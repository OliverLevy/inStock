import React from "react";
import Logo from "../../assets/logo/Logo-instock.svg";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="nav">
      <img className="nav__logo" src={Logo} alt="InStock Logo" />
      <div className="nav__item-container">
        <div className='nav__link-container'>
          <h3 className="nav__link--active">Inventory</h3>
        </div>
        <div className='nav__link-container'>
          <h3 className="nav__link">Locations</h3>
        </div>
      </div>
    </div>
  );
}
