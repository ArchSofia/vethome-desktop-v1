import React from "react";
import "./Icon2.css";

function Icon2(props) {
  const { className } = props;

  return (
    <div className={`icon-3-1 ${className || ""}`}>
      <img className="user-1" src="/img/user-1.svg" alt="User" />
      <div className="divider-1"></div>
    </div>
  );
}

export default Icon2;
