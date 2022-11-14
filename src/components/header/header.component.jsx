import React from "react";

// ICON
import logo from "../../assets/logo/d-appa-logo.svg";
import phoneIcon from "../../assets/icons/phone.svg";

import "./header.style.scss";

function Header(props) {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo--img" src={logo} alt="logo" />
      </div>
      <ul className="header__nav">
        <li className="header__nav--item">
          <a href="#" className="header__nav--link">
            Home
          </a>
        </li>
        <li className="header__nav--item">
          <a href="#" className="header__nav--link">
            About
          </a>
        </li>
        <li className="header__nav--item">
          <a href="#" className="header__nav--link">
            Blog
          </a>
        </li>
        <li className="header__nav--item">
          <a href="#" className="header__nav--link">
            Team
          </a>
        </li>
        <li className="header__nav--item">
          <a href="#" className="header__nav--link">
            Contact
          </a>
        </li>
      </ul>
      <div className="header__number">
        <img
          className="header__number--icon"
          src={phoneIcon}
          alt="phone icon"
        />
        <span className="header__number--num">+88 00113 776655</span>
      </div>
    </div>
  );
}

export default Header;
