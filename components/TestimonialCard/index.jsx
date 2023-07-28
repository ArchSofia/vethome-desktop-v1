import React from "react";
import StarRating from "../StarRating";
import "./TestimonialCard.css";

function TestimonialCard(props) {
  const { photo, laurenM, uiDesignerBoo, animasLandingPag, starRatingProps } = props;

  return (
    <article className="testimonial-card-1">
      <div className="testimonial-info-1">
        <div className="client-info-1">
          <img className="photo-1" src={photo} alt="Photo" />
          <div className="person-details-1">
            <div className="lauren-m-1 display-xs">{laurenM}</div>
            <div className="ui-designer-boo-1 gothamrounded-book-normal-bright-gray-14px">{uiDesignerBoo}</div>
          </div>
        </div>
        <div className="text-8">
          <StarRating className={starRatingProps.className} />
          <p className="animas-landing-pag-1 gothamrounded-book-normal-thunder-16px">{animasLandingPag}</p>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
