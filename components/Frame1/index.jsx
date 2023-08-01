import React from "react";
import BotonContactanos from "../BotonContactanos";
import "./Frame1.css";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import React, { useRef } from "react";
import MacBookAir1 from "../MacBookAir1";
import { useEffect } from "react";

function Frame1(props) {
	const { botonContactanosProps } = props;

	const sectionToScrollRef = useRef(null);

	// Function to handle the smooth scroll
	const scrollToSection = () => {
		if (sectionToScrollRef.current) {
			sectionToScrollRef.current.scrollIntoView({
				behavior: "smooth",
			});
		}
	};

	// Add an effect to scroll to the section when the component is mounted
	useEffect(() => {
		scrollToSection();
	}, []);

	return (
		<div className="frame-1">
			<div className="clinica-veterinaria-1">
				<div className="clnica-veterinaria-1 gothamrounded-bold-camelot-18px">
					Clínica Veterinaria
				</div>
				<img className="line-6" src="/img/line-6.svg" alt="Line 6" />
			</div>
			<div className="flex-container-524411 gothamrounded-bold-white-48px">
				<div className="text-5">
					<span className="gothamrounded-bold-white-48px">
						Tu familia es importante
					</span>
				</div>
				<div className="text-5">
					<span className="gothamrounded-bold-white-48px">para nosotros</span>
				</div>
			</div>
			<p className="estamos-24-horas-al-1 gothamrounded-book-normal-white-20px">
				Estamos 24 horas al día disponibles para la salud de tus mascotas.
			</p>
			<Link to="contacto" smooth={true}>
				<BotonContactanos onClick={scrollToSection}>
					{botonContactanosProps.children}
				</BotonContactanos>
			</Link>
		</div>
	);
}

export default Frame1;
