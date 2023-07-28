import React from "react";
import Icon from "../Icon";
import "./CardInfo.css";

function CardInfo(props) {
  const { radiologa, iconProps } = props;

  return (
    <div className="card-info-1">
      <Icon src={iconProps.src} />
      <div className="text-2">
        <div className="radiologa gothamrounded-bold-thunder-28px">{radiologa}</div>
        <p className="imagen-por-rayos-x-p-1 gothamrounded-book-normal-thunder-16px">
          Imagen por rayos X para diagnóstico de patologías y lesiones.
        </p>
      </div>
    </div>
  );
}

export default CardInfo;
