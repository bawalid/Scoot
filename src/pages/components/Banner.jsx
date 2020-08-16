import React from "react";
import "./components-css/Banner.css";
import BannerContent from "./BannerContent";

import circle from "../../assets/patterns/circle.svg";
import leftArrow from "../../assets/patterns/left-downward-arrow.svg";
import leftArrowUp from "../../assets/patterns/left-upward-arrow.svg";

const Banner = (props) => {
  return (
    <div className={"banner " + props.windowMode + " " + props.direction}>
      <div className="banner-art">
        <img className="art-circle-image" src={props.img} alt=""></img>
        {props.windowMode !== "mobile" && (
          <img className="art-circle" src={circle} alt=""></img>
        )}
        <img
          className={"banner-arrow" + props.number}
          src={props.reverseArrow ? leftArrowUp : leftArrow}
          alt=""
          style={{ bottom: props.reverseArrow && "35px" }}
        ></img>
      </div>
      <BannerContent
        number={props.number}
        description={props.description}
        title={props.title}
        learnmore
      />
    </div>
  );
};

export default Banner;
