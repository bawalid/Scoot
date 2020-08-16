import React from "react";
import "./components-css/JobCard.css";
import BannerContent from "./BannerContent";
import Btn from "./Btn";

const JobCard = (props) => {
  return (
    <div className={"job-card " + props.windowMode}>
      <BannerContent title={props.title} description={props.description} />
      <Btn btnTitle="Apply" />
    </div>
  );
};

export default JobCard;
