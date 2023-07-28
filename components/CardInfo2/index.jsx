import React from "react";
import Icon from "../Icon";
import "./CardInfo2.css";

function CardInfo2(props) {
  const { ecografa, diagnsticoDeImge, iconProps } = props;

  return (
    <div className="card-info-3">
      <Icon src={iconProps.src} />
      <div className="text-6">
        <div className="ecografa-1 gothamrounded-bold-thunder-28px">{ecografa}</div>
        <p className="diagnstico-de-imge gothamrounded-book-normal-thunder-16px">{diagnsticoDeImge}</p>
      </div>
    </div>
  );
}

export default CardInfo2;
