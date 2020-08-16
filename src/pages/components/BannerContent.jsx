import React from "react";
import Btn from "./Btn";
import "./components-css/BannerContent.css";

const BannerContent = (props) => {
  return (
    <div className="banner-content">
      <h2 className="banner-title">{props.title}</h2>
      <p className="banner-description">{props.description}</p>
      {props.learnmore && (
        <Btn
          btnTitle="Learn More"
          link={props.number === "2" ? "/locations" : "/about"}
        />
      )}
    </div>
  );
};

export default BannerContent;
