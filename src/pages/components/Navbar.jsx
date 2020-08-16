import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components-css/Navbar.css";
import Btn from "./Btn";
import ScootLogo from "../../assets/logo.svg";
import HumbergerIcon from "../../assets/icons/hamburger.svg";
import CloseIcon from "../../assets/icons/close.svg";
import { gsap } from "gsap";

const Navbar = (props) => {
  const [hamburgerClick, sethamburgerClick] = useState(false);

  function handelClick() {
    if (!hamburgerClick) {
      sethamburgerClick(true);
      gsap.to(".hamburgerNav", {
        duration: 1,
        left: 0,
        ease: "power3.out",
      });
    } else {
      sethamburgerClick(false);
      gsap.to(".hamburgerNav", {
        duration: 1,
        left: -256,
        ease: "power3.out",
      });
    }
  }

  const navbarClass = "navbar " + props.windowMode;

  return (
    <nav className={navbarClass}>
      {props.windowMode === "mobile" && (
        <div className="hamburgerNav">
          <ul className="hamburger-nav">
            <li className="hamburger-item">
              <Link to="/about" className="nav-link" onClick={handelClick}>
                About
              </Link>
            </li>
            <li className="hamburger-item">
              <Link to="/careers" className="nav-link" onClick={handelClick}>
                Careers
              </Link>
            </li>
            <li className="hamburger-item">
              <Link to="/locations" className="nav-link" onClick={handelClick}>
                Locations
              </Link>
            </li>
          </ul>

          <Btn btnTitle="Get Scootin" link="#singup" />
        </div>
      )}
      {props.windowMode === "mobile" && (
        <div className="hamburgerMenu" onClick={handelClick}>
          {!hamburgerClick ? (
            <img src={HumbergerIcon} alt="hamburger menu" />
          ) : (
            <img src={CloseIcon} alt="hamburger menu" />
          )}
        </div>
      )}
      <Link to="/" className="navbar-scoot">
        <img src={ScootLogo} alt="scoot logo" />
      </Link>
      {(props.windowMode === "desktop" || props.windowMode === "tablet") && (
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/locations" className="nav-link">
                Locations
              </Link>
            </li>
          </ul>
        </div>
      )}
      {(props.windowMode === "desktop" || props.windowMode === "tablet") && (
        <Btn btnTitle="Get Scootin" link="#singup" />
      )}
    </nav>
  );
};

export default Navbar;
