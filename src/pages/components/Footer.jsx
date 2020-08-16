import React from "react";
import { Link } from "react-router-dom";
import ScootLogo from "../../assets/logoFooter.svg";
import "./components-css/Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = (props) => {
  const footerClass = "footer " + props.windowMode;
  return (
    <footer className={footerClass}>
      <Link to="/" className="navbar-scoot">
        <img src={ScootLogo} alt="scoot logo" />
      </Link>
      <div className="footer-links">
        <ul className="footer-ul">
          <li className="footer-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/careers" className="nav-link">
              Careers
            </Link>
          </li>
          <li className="footer-item">
            <Link to="/locations" className="nav-link">
              Locations
            </Link>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <ul className="social-ul">
          <li className="social-item">
            <FacebookIcon style={{ color: "#fcb72b" }} />
          </li>
          <li className="social-item">
            <TwitterIcon style={{ color: "#fcb72b" }} />
          </li>
          <li className="social-item">
            <InstagramIcon style={{ color: "#fcb72b" }} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
