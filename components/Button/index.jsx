import React from "react";
import ArrowRight from "../ArrowRight";
import "./Button.css";

function Button(props) {
  const { arrowRightProps } = props;

  return (
    <a
      href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
      target="_blank"
    >
      <div className="button-2">
        <div className="label-1 poppins-semi-bold-claret-16px">Saber más</div>
        <ArrowRight className={arrowRightProps.className} />
      </div>
    </a>
  );
}

export default Button;
