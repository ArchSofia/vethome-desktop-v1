import React from "react";
import "./Icon.css";

function Icon(props) {
  const { src } = props;

  return (
    <div className="icon-1">
      <img className="raio-x-1" src={src} alt="raio-x 1" />
    </div>
  );
}

export default Icon;
