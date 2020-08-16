import React from "react";
import "./components-css/Step.css";

const Step = (props) => {
  return (
    <div className={"step " + props.windowMode}>
      <img src={props.icon} alt="locate with app"></img>
      <div className="step-content">
        <h4 className="step-title">{props.title}</h4>
        <p className="step-description">{props.description}</p>
      </div>
    </div>
  );
};

export default Step;
