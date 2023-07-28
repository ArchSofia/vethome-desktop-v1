import React from "react";
import "./BotonContactanos.css";

function BotonContactanos(props) {
	const { children, onClick } = props;

	return (
		<button className="boton-contactanos-1" onClick={onClick}>
			<div className="contactanos-container-1">
				<div className="boton-contactanos-2"></div>
				<div className="contactanos-1 montserrat-semi-bold-alabaster-21px">
					{children}
				</div>
			</div>
		</button>
	);
}

export default BotonContactanos;
