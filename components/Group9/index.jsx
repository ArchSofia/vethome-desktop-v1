import React from "react";
import "./Group9.css";

function Group9(props) {
  const {
    screenShot20230417At20422,
    screenShot20230417At20402,
    text4,
    pacientesRegistrados,
    screenShot20230417At20372,
    bordercollie,
    disponibleParaConsulta,
    drGuadalupePoggi,
    veterinaria,
    screenShot20230417At20152,
  } = props;

  return (
    <div className="group-9">
      <div className="overlap-group3">
        <div className="overlap-group">
          <div className="ellipse-2"></div>
          <div className="ellipse-3"></div>
          <div className="rectangle-7"></div>
          <img
            className="screen-shot-2023-04-17-at-2042-2"
            src={screenShot20230417At20422}
            alt="Screen Shot 2023-04-17 at 20.42 2"
          />
          <div className="rectangle-8"></div>
          <img
            className="screen-shot-2023-04-17-at-2040-2"
            src={screenShot20230417At20402}
            alt="Screen Shot 2023-04-17 at 20.40 2"
          />
          <div className="text-1">{text4}</div>
          <div className="pacientes-registrados">{pacientesRegistrados}</div>
        </div>
        <div className="overlap-group1-1">
          <div className="rectangle-7-1"></div>
          <img
            className="screen-shot-2023-04-17-at-2037-2"
            src={screenShot20230417At20372}
            alt="Screen Shot 2023-04-17 at 20.37 2"
          />
        </div>
        <img className="bordercollie" src={bordercollie} alt="bordercollie" />
        <div className="overlap-group2">
          <div className="overlap-group-1">
            <div className="rectangle-8-1"></div>
            <div className="disponible-para-consulta">{disponibleParaConsulta}</div>
            <div className="dr-guadalupe-poggi">{drGuadalupePoggi}</div>
            <div className="veterinaria">{veterinaria}</div>
          </div>
          <img
            className="screen-shot-2023-04-17-at-2015-2"
            src={screenShot20230417At20152}
            alt="Screen Shot 2023-04-17 at 20.15 2"
          />
        </div>
      </div>
    </div>
  );
}

export default Group9;
