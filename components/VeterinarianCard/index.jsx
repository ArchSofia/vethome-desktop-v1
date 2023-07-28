import React from "react";
import "./VeterinarianCard.css";

function VeterinarianCard(props) {
  const {
    screenShot20230417At20152,
    drGuadalupePoggio,
    veterinaria,
    text2,
    star_37941581,
    x1200Pacientes,
    universidadDeBuenosAires,
  } = props;

  return (
    <div className="veterinarian-card">
      <div className="overlap-group-5">
        <img
          className="screen-shot-2023-04-17-at-2015-2-2"
          src={screenShot20230417At20152}
          alt="Screen Shot 2023-04-17 at 20.15 2"
        />
        <div className="overlap-group3-2">
          <div className="overlap-group1-4">
            <div className="dr-guadalupe-poggio">{drGuadalupePoggio}</div>
            <div className="veterinaria-2 inter-semi-bold-manatee-14px">{veterinaria}</div>
            <div className="text-4-1 inter-semi-bold-manatee-14px">{text2}</div>
          </div>
          <img className="star_3794158-1" src={star_37941581} alt="star_3794158 1" />
        </div>
        <div className="overlap-group2-2">
          <div className="x1200-pacientes">{x1200Pacientes}</div>
          <div className="universidad-de-buenos-aires">{universidadDeBuenosAires}</div>
        </div>
      </div>
    </div>
  );
}

export default VeterinarianCard;
