import React from "react";
import "./Icon2.css";

function IconEmail(props) {
	const { className } = props;

	return (
		<div className={`icon-3-1 ${className || ""}`}>
			<img className="user-1" src="/img/envelopesimple-1.svg" alt="User" />
			<div className="divider-1"></div>
		</div>
	);
}

export default IconEmail;
