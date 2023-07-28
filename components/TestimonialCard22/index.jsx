import React from "react";
import ClientInfo from "../ClientInfo";
import StarRating from "../StarRating";
import "./TestimonialCard22.css";

function TestimonialCard22(props) {
  const { animasLandingPag, clientInfoProps } = props;

  return (
    <div className="testimonial-card">
      <div className="testimonial-info">
        <ClientInfo
          photo={clientInfoProps.photo}
          name={clientInfoProps.name}
          uiDesignerBoo={clientInfoProps.uiDesignerBoo}
        />
        <div className="text-3">
          <p className="animas-landing-pag body-m">{animasLandingPag}</p>
          <StarRating />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard22;
