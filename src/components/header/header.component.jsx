import React, { useState } from "react";

// ICON
import logo from "../../assets/logo/d-appa-logo.svg";
import phoneIcon from "../../assets/icons/phone.svg";

import "./header.style.scss";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo--img" src={logo} alt="logo" />
      </div>
      <div className="burger-menu-container">
        <svg
          onClick={() => setMenuOpen(!menuOpen)}
          class={menuOpen ? "burger-btn active" : "burger-btn"}
          width="30"
          height="22"
          viewBox="0 0 40 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect class="burger-btn--1" width="35" height="4" rx="3" ry="3" />
          <rect
            class="burger-btn--2"
            width="35"
            height="4"
            y="10"
            rx="3"
            ry="3"
          />
          <rect
            class="burger-btn--3"
            width="35"
            height="4"
            y="20"
            rx="3"
            ry="3"
          />
        </svg>
      </div>
      <ul className={menuOpen ? "header__nav open" : "header__nav"}>
        <div className="box">
          <div className="header__nav--logo">
            <img className="header__nav--logo--img" src={logo} alt="logo" />
          </div>
          <div className="burger-menu-container">
            <svg
              onClick={() => setMenuOpen(!menuOpen)}
              class={menuOpen ? "burger-btn active" : "burger-btn"}
              width="30"
              height="22"
              viewBox="0 0 40 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect class="burger-btn--1" width="35" height="4" rx="3" ry="3" />
              <rect
                class="burger-btn--2"
                width="35"
                height="4"
                y="10"
                rx="3"
                ry="3"
              />
              <rect
                class="burger-btn--3"
                width="35"
                height="4"
                y="20"
                rx="3"
                ry="3"
              />
            </svg>
          </div>
        </div>
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
        <div className="header__nav--number">
          <img
            className="header__nav--number--icon"
            src={phoneIcon}
            alt="phone icon"
          />
          <span className="header__nav--number--num">+88 00113 776655</span>
        </div>
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
