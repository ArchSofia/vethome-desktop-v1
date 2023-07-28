import React from "react";
import "./Icon2.css";

function Icon2(props) {
	const { className } = props;

	return (
		<div className={`icon-3-1 ${className || ""}`}>
			<img className="send" src="/img/send1.png" alt="User" />
			<div className="divider-1"></div>
		</div>
	);
}

export default Icon2;
