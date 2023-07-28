import React from "react";
import TestimonialCard22 from "../TestimonialCard22";
import "./Testimonials22.css";

function Testimonials22(props) {
  const { realStoriesFromSatisfiedCustomers, seeHowOurLanding, testimonialCard21Props, testimonialCard22Props } = props;

  return (
    <div className="testimonials">
      <div className="headline-subhead-2">
        <div className="real-stories-from-satisfied-customers gothamrounded-bold-black-38px">
          {realStoriesFromSatisfiedCustomers}
        </div>
        <p className="see-how-our-landing gothamrounded-book-normal-thunder-16px">{seeHowOurLanding}</p>
      </div>
      <TestimonialCard22
        animasLandingPag={testimonialCard21Props.animasLandingPag}
        clientInfoProps={testimonialCard21Props.clientInfoProps}
      />
      <TestimonialCard22
        animasLandingPag={testimonialCard22Props.animasLandingPag}
        clientInfoProps={testimonialCard22Props.clientInfoProps}
      />
    </div>
  );
}

export default Testimonials22;
