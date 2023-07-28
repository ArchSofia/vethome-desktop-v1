import React from "react";
import "./Boton.css";

function Boton(props) {
  const { children } = props;

  return (
    <div className="button-1">
      <div className="contactanos-container">
        <div className="boton-contactanos"></div>
        <div className="contactanos montserrat-semi-bold-alabaster-21px">{children}</div>
      </div>
    </div>
  );
}

export default Boton;
