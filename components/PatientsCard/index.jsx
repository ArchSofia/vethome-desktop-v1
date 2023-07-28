import React from "react";
import "./PatientsCard.css";

function PatientsCard(props) {
  const { className } = props;

  return (
    <div className={`patients-card ${className || ""}`}>
      <div className="x1-k-pacientes inter-bold-tuatara-17px">1K pacientes</div>
      <div className="overlap-group-2">
        <img className="mask-group" src="/img/mask-group-3@2x.png" alt="Mask group" />
        <div className="ellipse-12"></div>
        <img className="mask-group-1" src="/img/mask-group-4@2x.png" alt="Mask group" />
        <div className="ellipse-11"></div>
        <img className="mask-group-2" src="/img/mask-group-5@2x.png" alt="Mask group" />
        <div className="ellipse-10"></div>
        <div className="ellipse-9"></div>
        <div className="x1-k inter-bold-white-17px">1K</div>
      </div>
    </div>
  );
}

export default PatientsCard;
