import React from "react";
import "./NavbarLinks.css";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

function NavbarLinks() {
	return (
		<div className="navbar-links" id="navbar">
			<div className="flex-row montserrat-semi-bold-white-20px">
				<Link to="navbar">
					<div className="place">Home</div>
				</Link>
				<Link to="servicios">
					<div className="servicios">Servicios</div>
				</Link>
				<Link to="veterinarios">
					<div className="veterinarios">Veterinarios</div>
				</Link>
				<Link to="about">
					<div className="about">About</div>
				</Link>
				<Link to="contacto">
					<div className="contacto">Contacto</div>
				</Link>
			</div>
		</div>
	);
}

export default NavbarLinks;
