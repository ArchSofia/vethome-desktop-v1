import React from "react";
import "./StarRating.css";

function StarRating(props) {
  const { className } = props;

  return (
    <div className={`star-rating-2 ${className || ""}`}>
      <article className="star-icon" src="/img/star-icon-10.svg" alt="Star Icon" />
      <article className="star-icon variant-1" src="/img/star-icon-10.svg" alt="Star Icon" />
      <article className="star-icon variant-2" src="/img/star-icon-10.svg" alt="Star Icon" />
      <article className="star-icon variant-3" src="/img/star-icon-10.svg" alt="Star Icon" />
      <article className="star-icon variant-4" src="/img/star-icon-10.svg" alt="Star Icon" />
    </div>
  );
}

export default StarRating;
