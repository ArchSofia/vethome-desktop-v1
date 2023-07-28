import React from "react";
import CardInfo2 from "../CardInfo2";
import Button from "../Button";
import "./FeatureCard.css";

function FeatureCard(props) {
	const { cardInfo2Props, buttonProps } = props;

	return (
		<div className="feature-card-6">
			<CardInfo2
				ecografa={cardInfo2Props.ecografa}
				diagnsticoDeImge={cardInfo2Props.diagnsticoDeImge}
				iconProps={cardInfo2Props.iconProps}
			/>
			{/* <Button arrowRightProps={buttonProps.arrowRightProps} /> */}
		</div>
	);
}

export default FeatureCard;
