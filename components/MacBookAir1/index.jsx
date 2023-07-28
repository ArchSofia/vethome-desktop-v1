import React from "react";
import NavbarLinks from "../NavbarLinks";
import Frame1 from "../Frame1";
import CardInfo2 from "../CardInfo2";
import Button from "../Button";
import FeatureCard from "../FeatureCard";
import CardInfo4 from "../CardInfo4";
import Icon from "../Icon";
import VeterinarianCard from "../VeterinarianCard";
import PatientsCard from "../PatientsCard";
import CardsRow from "../CardsRow";
import Testimonials from "../Testimonials";
import ContactDetails from "../ContactDetails";
import InputField from "../InputField";
import InputFieldEmail from "../InputFieldEmail";
import InputFieldPhone from "../InputFieldPhone";
import Icon2 from "../Icon2";
import IconMensaje from "../IconMensaje";
import Button2 from "../Button2";
import Footer from "../Footer";
import "./MacBookAir1.css";
import React, { useRef } from "react";
import envelope from "../../dist/img/envelopesimple-1.svg";

import React, { useState } from "react";
import emailjs from "emailjs-com";

function MacBookAir1(props) {
	const {
		vetHome,
		screenShot20230417At20422,
		circuloNaranja,
		text3,
		pacientesRegistrados,
		screen_Shot_20230722_At_17321,
		bordercollie,
		drGuadalupePoggi,
		veterinaria,
		disponibleParaConsulta,
		screenShot20230417At20152,
		features,
		estamosAlServicio,
		petShop,
		alimentosAccesorio,
		veterinarianPhoto,
		comunicateConNosotros,
		tenesAlgunaDudaS,
		connectWithUs,
		inputType,
		inputPlaceholder,
		frame1Props,
		cardInfo21Props,
		button1Props,
		featureCardProps,
		cardInfo4Props,
		button2Props,
		cardInfo22Props,
		button3Props,
		cardInfo23Props,
		button4Props,
		cardInfo24Props,
		button5Props,
		iconProps,
		button6Props,
		veterinarianCardProps,
		patientsCardProps,
		testimonialsProps,
		contactDetailsProps,
		inputField1Props,
		inputField2Props,
		inputField3Props,
		icon2Props,
		footerProps,
		sectionToScrollRef,
	} = props;

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	console.log("formData:", formData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailParams = {
			from_name: formData.name,
			from_email: formData.email,
			phone: formData.phone,
			message: formData.message,
		};

		emailjs
			.send(
				"service_thtyy7j",
				"template_heo8e3s",
				emailParams,
				"uEVk4n9-pqI3wEa2Q"
			)
			.then(
				(response) => {
					console.log("Email sent successfully:", response);
					alert("Form submitted successfully!");
				},
				(error) => {
					console.error("Error sending email:", error);
					alert("Form submission failed. Please try again later.");
				}
			);
	};

	return (
		<form
			className="macbook-air-1 screen"
			name="form1"
			action="form1"
			method="post"
			onSubmit={handleSubmit}
		>
			<div className="navbar-1">
				<div className="logo">
					<div className="vet-home">{vetHome}</div>
				</div>
				<div className="navigation-menu">
					<NavbarLinks />
				</div>
			</div>
			<div className="hero-section-1">
				<Frame1 botonContactanosProps={frame1Props.botonContactanosProps} />
				<div className="group-6">
					<div className="overlap-group5">
						<div className="overlap-group2-1">
							<div className="ellipse-2-1"></div>
							<div className="ellipse-3-1"></div>
							<div className="rectangle-7-2"></div>
							<img
								className="screen-shot-2023-04-17-at-2042-2-1"
								src={screenShot20230417At20422}
								alt="Screen Shot 2023-04-17 at 20.42 2"
							/>
							<div className="overlap-group-3">
								<div className="overlap-group1-2">
									<img
										className="circulo-naranja"
										src={circuloNaranja}
										alt="circulo naranja"
									/>
									<div className="ellipse-13"></div>
									<div className="text-3-1">{text3}</div>
								</div>
								<div className="pacientes-registrados-1">
									{pacientesRegistrados}
								</div>
							</div>
						</div>
						<div className="overlap-group3-1">
							<div className="rectangle-7-3"></div>
							<img
								className="screen_-shot_2023-07-22_at_1732-1"
								src={screen_Shot_20230722_At_17321}
								alt="Screen_Shot_2023-07-22_at_17.32 1"
							/>
						</div>
						<img
							className="bordercollie-1"
							src={bordercollie}
							alt="bordercollie"
						/>
						<div className="overlap-group4-1">
							<div className="overlap-group-container">
								<div className="overlap-group-4">
									<div className="dr-guadalupe-poggi-1">{drGuadalupePoggi}</div>
									<div className="veterinaria-1">{veterinaria}</div>
								</div>
								<div className="overlap-group1-3">
									<div className="rectangle-8-2"></div>
									<div className="disponible-para-consulta-1">
										{disponibleParaConsulta}
									</div>
								</div>
							</div>
							<img
								className="screen-shot-2023-04-17-at-2015-2-1"
								src={screenShot20230417At20152}
								alt="Screen Shot 2023-04-17 at 20.15 2"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="features-1" id="servicios">
				<div className="headline-subhead-3">
					<h1 className="features-2 gothamrounded-bold-black-38px">
						{features}
					</h1>
					<p className="estamos-al-servicio-1">{estamosAlServicio}</p>
				</div>
				<div className="cards-row">
					<div className="feature-card-2">
						<CardInfo2
							ecografa={cardInfo21Props.ecografa}
							diagnsticoDeImge={cardInfo21Props.diagnsticoDeImge}
							iconProps={cardInfo21Props.iconProps}
						/>
						{/* <Button arrowRightProps={button1Props.arrowRightProps} /> */}
					</div>
					<div className="frame-2">
						<FeatureCard
							cardInfo2Props={featureCardProps.cardInfo2Props}
							buttonProps={featureCardProps.buttonProps}
						/>
					</div>
					<div className="feature-card-3">
						<CardInfo4
							internacinYTratamiento={cardInfo4Props.internacinYTratamiento}
							iconProps={cardInfo4Props.iconProps}
						/>
						{/* <Button arrowRightProps={button2Props.arrowRightProps} /> */}
					</div>
				</div>
				<div className="cards-row">
					<div className="feature-card-1">
						<CardInfo2
							ecografa={cardInfo22Props.ecografa}
							diagnsticoDeImge={cardInfo22Props.diagnsticoDeImge}
							iconProps={cardInfo22Props.iconProps}
						/>
						{/* <Button arrowRightProps={button3Props.arrowRightProps} /> */}
					</div>
					<div className="feature-card-1">
						<CardInfo2
							ecografa={cardInfo23Props.ecografa}
							diagnsticoDeImge={cardInfo23Props.diagnsticoDeImge}
							iconProps={cardInfo23Props.iconProps}
						/>
						{/* <Button arrowRightProps={button4Props.arrowRightProps} /> */}
					</div>
					<div className="feature-card-1">
						<CardInfo2
							ecografa={cardInfo24Props.ecografa}
							diagnsticoDeImge={cardInfo24Props.diagnsticoDeImge}
							iconProps={cardInfo24Props.iconProps}
						/>
						{/* <Button arrowRightProps={button5Props.arrowRightProps} /> */}
					</div>
				</div>
				<div className="feature-card-5">
					<div className="card-info-2">
						<Icon src={iconProps.src} />
						<div className="text-4">
							<div className="pet-shop-1 gothamrounded-bold-thunder-28px">
								{petShop}
							</div>
							<p className="alimentos-accesorio gothamrounded-book-normal-thunder-16px">
								{alimentosAccesorio}
							</p>
						</div>
					</div>
					{/* <Button arrowRightProps={button6Props.arrowRightProps} /> */}
				</div>
			</div>
			<div className="team" id="veterinarios">
				<div className="veterinarian-photo-2">
					<div className="overlap-group5-1">
						<div className="photo-background-1"></div>
						<img
							className="veterinarian-photo-3"
							src={veterinarianPhoto}
							alt="Veterinarian photo"
						/>
						<VeterinarianCard
							screenShot20230417At20152={
								veterinarianCardProps.screenShot20230417At20152
							}
							drGuadalupePoggio={veterinarianCardProps.drGuadalupePoggio}
							veterinaria={veterinarianCardProps.veterinaria}
							text2={veterinarianCardProps.text2}
							star_37941581={veterinarianCardProps.star_37941581}
							x1200Pacientes={veterinarianCardProps.x1200Pacientes}
							universidadDeBuenosAires={
								veterinarianCardProps.universidadDeBuenosAires
							}
						/>
						<PatientsCard className={patientsCardProps.className} />
					</div>
				</div>
				<div className="headline-subhead-4">
					<CardsRow />
				</div>
			</div>
			<div id="about"></div>
			<Testimonials
				realStoriesFromSatisfiedCustomers={
					testimonialsProps.realStoriesFromSatisfiedCustomers
				}
				seeHowOurLanding={testimonialsProps.seeHowOurLanding}
				testimonialCard1Props={testimonialsProps.testimonialCard1Props}
				testimonialCard2Props={testimonialsProps.testimonialCard2Props}
			/>
			<div className="contact-form-2" id="contacto" ref={sectionToScrollRef}>
				<div className="contact-form-3">
					<div className="header-3">
						<div className="headline-subhead-5">
							<div className="comunicate-con-nosotros-1 display-m">
								{comunicateConNosotros}
							</div>
							<p className="tenes-alguna-duda-s-1 body-m">{tenesAlgunaDudaS}</p>
						</div>
					</div>
					<div className="header-4">
						<div className="contact-details-1">
							<ContactDetails
								phone1Props={contactDetailsProps.phone1Props}
								phone2Props={contactDetailsProps.phone2Props}
							/>
							<div className="social-media-1">
								<div className="connect-with-us display-xs">
									{connectWithUs}
								</div>
								<div className="social-links-1">
									<a
										href="https://www.instagram.com/vethome.pilar/"
										target="_blank"
									>
										<img
											className="social-icons-1"
											src="/img/social-icons.svg"
											alt="Social Icons"
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="input-fields-button">
							<div className="input-fields">
								<InputField
									value={formData.name}
									onChange={handleChange}
									required
									name="name"
									inputType={inputField1Props.inputType}
									inputPlaceholder={"Nombre Completo"}
									icon2Props={inputField1Props.icon2Props}
								/>
								<InputFieldEmail
									inputType={inputField2Props.inputType}
									inputPlaceholder={inputField2Props.inputPlaceholder}
									icon2Props={inputField2Props.icon2Props}
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
								<InputFieldPhone
									inputType={inputField3Props.inputType}
									inputPlaceholder={"Teléfono"}
									icon2Props={inputField3Props.icon2Props}
									value={formData.phone}
									onChange={handleChange}
									name="phone"
									required
								/>
								<div className="input-field-4">
									<IconMensaje className={icon2Props.className} />
									<textarea
										className="mensaje-1 body-m"
										placeholder={"Mensaje"}
										type="text"
										required
										name="message"
										value={formData.message}
										onChange={handleChange}
									/>
								</div>
							</div>
							<Button2 type="submit" />
						</div>
					</div>
				</div>
			</div>
			<Footer>{footerProps.children}</Footer>
		</form>
	);
}

export default MacBookAir1;
