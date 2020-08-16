import React from "react";

const Btn = (props) => {
  if (props.link === "#singup") {
  }

  return (
    <div className="btn">
      <a href={props.link}>
        <button>{props.btnTitle}</button>
      </a>
    </div>
  );
};

export default Btn;
