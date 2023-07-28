import React from "react";
import TestimonialCard from "../TestimonialCard";
import "./Testimonials.css";

function Testimonials(props) {
  const { realStoriesFromSatisfiedCustomers, seeHowOurLanding, testimonialCard1Props, testimonialCard2Props } = props;

  return (
    <div className="testimonials-1">
      <div className="headline-subhead-6">
        <div className="real-stories-from-satisfied-customers-1 gothamrounded-bold-black-38px">
          {realStoriesFromSatisfiedCustomers}
        </div>
        <p className="see-how-our-landing-1 gothamrounded-book-normal-thunder-16px">{seeHowOurLanding}</p>
      </div>
      <div className="cards-row-2">
        <TestimonialCard
          photo={testimonialCard1Props.photo}
          laurenM={testimonialCard1Props.laurenM}
          uiDesignerBoo={testimonialCard1Props.uiDesignerBoo}
          animasLandingPag={testimonialCard1Props.animasLandingPag}
          starRatingProps={testimonialCard1Props.starRatingProps}
        />
        <TestimonialCard
          photo={testimonialCard2Props.photo}
          laurenM={testimonialCard2Props.laurenM}
          uiDesignerBoo={testimonialCard2Props.uiDesignerBoo}
          animasLandingPag={testimonialCard2Props.animasLandingPag}
          starRatingProps={testimonialCard2Props.starRatingProps}
        />
      </div>
    </div>
  );
}

export default Testimonials;
