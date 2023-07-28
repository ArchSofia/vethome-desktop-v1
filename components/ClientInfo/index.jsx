import React from "react";
import "./ClientInfo.css";

function ClientInfo(props) {
  const { photo, name, uiDesignerBoo } = props;

  return (
    <div className="client-info">
      <img className="photo" src={photo} alt="Photo" />
      <div className="person-details">
        <div className="lauren-m display-xs">{name}</div>
        <div className="ui-designer-boo body-s">{uiDesignerBoo}</div>
      </div>
    </div>
  );
}

export default ClientInfo;
