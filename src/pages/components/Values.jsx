import React from "react";
import CircleImgNbr from "./CircleImgNbr";
import BannerContent from "./BannerContent";
import "./components-css/Values.css";

import Valuetech from "../../assets/images/our-tech.jpg";
import Valueintegrity from "../../assets/images/our-integrity.jpg";
import Valuecommunity from "../../assets/images/our-community.jpg";

const Values = (props) => {
  return (
    <div className={"values " + props.windowMode}>
      <h2 className="values-title">{props.title}</h2>
      <div className="values-steps">
        <div>
          <CircleImgNbr img={Valuetech} number="01" />
          <BannerContent
            title="Our tech"
            description="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
          />
        </div>
        <div>
          <CircleImgNbr img={Valueintegrity} number="02" />
          <BannerContent
            title="Our integrity"
            description="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
          />
        </div>
        <div>
          <CircleImgNbr img={Valuecommunity} number="03" />
          <BannerContent
            title="Our community"
            description="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
          />
        </div>
      </div>
    </div>
  );
};

export default Values;
