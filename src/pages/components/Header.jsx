import React, { useState, useEffect } from "react";
import Btn from "./Btn";
import "./components-css/Header.css";

import Line from "../../assets/patterns/line.svg";
import RightArrow from "../../assets/patterns/right-arrow.svg";
import WCircle from "../../assets/patterns/white-circles.svg";

const Header = (props) => {
  const patternClass = "patterns-container " + props.windowMode;
  const [screen, setscreen] = useState();

  useEffect(() => {
    if (window.innerWidth < 1430 && window.innerWidth >= 960) {
      setscreen("patterns-container desktop reduce");
    } else {
      setscreen(patternClass);
    }
  }, [patternClass]);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1430 && window.innerWidth > 1144) {
      setscreen("patterns-container desktop reduce");
    } else {
      setscreen(patternClass);
    }
  });

  return (
    <div
      className={props.hasContents ? "top-header" : "top-header empty"}
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className={"header-container " + props.windowMode}>
        <h1 className="title">{props.title}</h1>
        {props.hasContents && (
          <div className="header-content">
            <p className="header-description">{props.description}</p>
            <Btn btnTitle="Get Scootin" link="#singup" />
          </div>
        )}
      </div>
      {props.hasContents ? (
        <div className={screen}>
          {props.windowMode === "desktop" && (
            <img src={Line} className="linePattern" alt="" />
          )}
          <img src={RightArrow} className="rightArrowPattern" alt="" />
          {props.windowMode !== "mobile" && (
            <img src={WCircle} className="wCirclePattern" alt="" />
          )}
        </div>
      ) : (
        props.windowMode !== "mobile" && (
          <img src={WCircle} className="wCirclePatternSolo" alt="" />
        )
      )}
    </div>
  );
};

export default Header;
