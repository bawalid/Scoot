import React from "react";
import "./components-css/CircleImgNbr.css";

const CircleImgNbr = (props) => {
  return (
    <div className="CircleImgNbr">
      <img src={props.img} alt="" />
      <div className="circleImg-number">
        <h4>{props.number}</h4>
      </div>
    </div>
  );
};

export default CircleImgNbr;
