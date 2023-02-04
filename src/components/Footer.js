import React from "react";
import "./FooterStyle.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <BsFacebook className="icon" />
          <GrInstagram className="icon" />
          <AiFillTwitterCircle className="icon" />
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Other</h4>
          <a href="/">Tearms of Service</a>
          <a href="/">Privancy Policy</a>
          <a href="/">Licebse</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
