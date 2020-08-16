import React from "react";
import "./components-css/Singup.css";
import appStore from "../../assets/icons/app-store.svg";
import playStore from "../../assets/icons/google-play.svg";
import semiCircles from "../../assets/patterns/semi-circles.svg";

const Singup = (props) => {
  return (
    <div className={"singup " + props.windowMode}>
      <h2 className="signup-title">Sign up and Scoot off today</h2>
      <div className="store-app">
        <a
          href="https://www.apple.com/ios/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appStore} alt="" />
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={playStore} alt="" />
        </a>
      </div>
      <img className="singup-semicircles" src={semiCircles} alt="" />
    </div>
  );
};

export default Singup;
