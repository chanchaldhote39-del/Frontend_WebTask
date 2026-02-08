import React from "react";
import "./Footer.css";
import company_logo from "../../assets/Images/company_logo.png"; // change if needed
import { FaPhoneFlip } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FiInstagram } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { TfiControlPlay } from "react-icons/tfi";
import { AiFillApple } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="footer-outer">
      <div className="footer-inner">

        {/* LEFT */}
        <div className="footer-col footer-left">
          <div className="footer-logo">
            <img src={company_logo} alt="logo" />
          </div>

          <p className="footer-text">
            Let's grow up your education level up. We are here
            <br />
            to help you keep focus when studying.
          </p>

          <h4 className="download-title">Download App Now</h4>

          <div className="store-buttons">
  <div className="store-box">
    <AiFillApple />
    <div>
      <p>Avaible on the</p>
      <span>App Store</span>
    </div>
  </div>

  <div className="store-box">
    <TfiControlPlay />
    <div>
     < p>Avaible on the</p>
     <span>Google Play</span>
    </div>
  </div>
</div>

        </div>

        {/* CENTER */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Course</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h4>Contact us</h4>
          <ul className="contact-list">
            <li><FaPhoneFlip/> +91-9172266888</li>
            <li><CiMail/> info@yopmail.com</li>
            <li>
              <CiLocationOn/> ISH Infotech, Phase 1, Hinjewadi, Pune,
              <br />
              Maharashtra - 411057
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>Copyright 2023 | All Rights Reserved</p>

        <div className="social-icons">
          <span><CiFacebook/></span>
          <span><LuTwitter/></span>
          <span><FiInstagram/></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


