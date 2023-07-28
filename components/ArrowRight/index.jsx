import React from "react";
import "./ArrowRight.css";

function ArrowRight(props) {
  const { className } = props;

  return <div className={`arrow-right-2 ${className || ""}`}></div>;
}

export default ArrowRight;
