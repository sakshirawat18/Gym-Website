import React from "react";
import "../style/Footer.css";
import github from "../assests/github.png";
import instagram from "../assests/instagram.png";
import linkedin from "../assests/linkedin.png";
import logo from "../assests/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>

        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
