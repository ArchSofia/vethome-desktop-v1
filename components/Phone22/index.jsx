import React from "react";
import "./Phone22.css";

function Phone22(props) {
  const { text5 } = props;

  return (
    <div className="contact-details-item">
      <img className="phone-call" src="/img/phonecall-2.svg" alt="PhoneCall" />
      <div className="text-2-1 body-m">{text5}</div>
    </div>
  );
}

export default Phone22;
