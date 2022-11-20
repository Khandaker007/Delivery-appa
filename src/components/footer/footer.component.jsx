import React from "react";

// ICONS
import phoneIcon from "../../assets/icons/phone.svg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// LOGO
import logo from "../../assets/logo/d-appa-logo.svg";

import "./footer.style.scss";

function Footer(props) {
  return (
    <div className="footer">
      <div className="number">
        <img src={phoneIcon} alt="icon" />
        <h1>+88 00113 776655</h1>
      </div>
      <hr />
      <div className="container">
        <div className="content-left">
          <div className="box">
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
            <p>
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy.
            </p>
          </div>
        </div>
        <div className="content-right">
          <div className="box">
            <div className="media-container">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
              <FaTwitter />
            </div>
            <h3>contact</h3>
            <p>Plot: 00 (6th Floor), Block: 0</p>
            <p>Road: 00, Baridhara, Dhaka - 1200</p>
            <p>Bangladesh.</p>
            <p>info@projectdeliveryappa.com</p>
          </div>
        </div>
        <div className="copyright">
          <span>© Delivery Appa - 2022</span>
          <span>Crafted with JoYY by YY Design</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
