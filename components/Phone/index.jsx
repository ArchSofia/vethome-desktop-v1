import React from "react";
import "./Phone.css";

function Phone(props) {
  const { text1 } = props;

  return (
    <div className="contact-details-2-item">
      <img className="phone-call-2" src="/img/phonecall.svg" alt="PhoneCall" />
      <div className="text-5-1 body-m">{text1}</div>
    </div>
  );
}

export default Phone;
