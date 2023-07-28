import React from "react";
import Icon from "../Icon";
import "./CardInfo4.css";

function CardInfo4(props) {
  const { internacinYTratamiento, iconProps } = props;

  return (
    <div className="card-info-4">
      <Icon src={iconProps.src} />
      <div className="text-7">
        <div className="unidad-de-cuidados-intensivos-1 gothamrounded-bold-thunder-28px">
          Unidad de cuidados intensivos
        </div>
        <div className="internacin-y-tratamiento gothamrounded-book-normal-thunder-16px">{internacinYTratamiento}</div>
      </div>
    </div>
  );
}

export default CardInfo4;
