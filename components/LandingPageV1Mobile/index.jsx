import React from "react";
import Navbar from "../Navbar";
import Boton from "../Boton";
import Group9 from "../Group9";
import CardInfo from "../CardInfo";
import Button from "../Button";
import Icon from "../Icon";
import ArrowRight from "../ArrowRight";
import PatientsCard from "../PatientsCard";
import Testimonials22 from "../Testimonials22";
import Phone22 from "../Phone22";
import InputField from "../InputField";
import Icon2 from "../Icon2";
import Button2 from "../Button2";
import Footer22 from "../Footer22";
import ContactDetails from "../ContactDetails";
import "./LandingPageV1Mobile.css";
import { useState } from "react";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import InputFieldEmail from "../InputFieldEmail";
import InputFieldPhone from "../InputFieldPhone";
import IconMensaje from "../IconMensaje";

function LandingPageV1Mobile(props) {
	const {
		clnicaVeterinaria,
		tuFamiliaEsImportanteParaNosotros,
		estamos24HorasAl,
		quServiciosOfrecemos,
		estamosAlServicio,
		unidadDeCuidadosIntensivos,
		imagenPorRayosXP,
		losMejoresMdicos,
		somosUnEquipoDeP,
		label,
		veterinarianPhoto,
		comunicateConNosotros,
		tenesAlgunaDudaS,
		conectateConNosotros,
		inputType1,
		inputPlaceholder1,
		inputType2,
		inputPlaceholder2,
		contactDetailsProps,
		navbarProps,
		botonProps,
		group9Props,
		cardInfo1Props,
		button1Props,
		cardInfo2Props,
		button2Props,
		iconProps,
		button3Props,
		cardInfo3Props,
		button4Props,
		cardInfo4Props,
		button5Props,
		cardInfo5Props,
		button6Props,
		cardInfo6Props,
		button7Props,
		arrowRight1Props,
		testimonials22Props,
		phone221Props,
		phone222Props,
		inputField1Props,
		inputField2Props,
		arrowRight2Props,
		inputField3Props,
		icon2Props,
		footer22Props,
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
		<div className="landing-page-v1-mobile screen">
			<div className="hero-section">
				<Navbar>{navbarProps.children}</Navbar>
				<div className="clinica-veterinaria">
					<div className="clnica-veterinaria gothamrounded-bold-camelot-18px">
						{clnicaVeterinaria}
					</div>
					<p className="tu-familia-es-importante-para-nosotros valign-text-middle">
						{tuFamiliaEsImportanteParaNosotros}
					</p>
					<p className="estamos-24-horas-al gothamrounded-book-normal-white-20px">
						{estamos24HorasAl}
					</p>
					<div className="cta">
						<Link to="contacto" smooth={true}>
							<Boton>{botonProps.children}</Boton>
						</Link>
					</div>
				</div>
				<div className="image">
					<Group9 {...group9Props} />
				</div>
			</div>
			<div className="features">
				<div className="headline-subhead">
					<div className="qu-servicios-ofrecemos gothamrounded-bold-black-38px">
						{quServiciosOfrecemos}
					</div>
					<p className="estamos-al-servicio gothamrounded-book-normal-thunder-16px">
						{estamosAlServicio}
					</p>
				</div>
				<div className="feature-card">
					<CardInfo
						radiologa={cardInfo1Props.radiologa}
						iconProps={cardInfo1Props.iconProps}
					/>
					{/* <Button arrowRightProps={button1Props.arrowRightProps} /> */}
				</div>
				<div className="feature-card">
					<CardInfo
						radiologa={cardInfo2Props.radiologa}
						iconProps={cardInfo2Props.iconProps}
					/>
					{/* <Button arrowRightProps={button2Props.arrowRightProps} /> */}
				</div>
				<div className="feature-card">
					<div className="card-info">
						<Icon src={iconProps.src} />
						<div className="text">
							<div className="unidad-de-cuidados-intensivos gothamrounded-bold-thunder-28px">
								{unidadDeCuidadosIntensivos}
							</div>
							<p className="imagen-por-rayos-x-p gothamrounded-book-normal-thunder-16px">
								{imagenPorRayosXP}
							</p>
						</div>
					</div>
					{/* <Button arrowRightProps={button3Props.arrowRightProps} /> */}
				</div>
				<div className="feature-card">
					<CardInfo
						radiologa={cardInfo3Props.radiologa}
						iconProps={cardInfo3Props.iconProps}
					/>
					{/* <Button arrowRightProps={button4Props.arrowRightProps} /> */}
				</div>
				<div className="feature-card">
					<CardInfo
						radiologa={cardInfo4Props.radiologa}
						iconProps={cardInfo4Props.iconProps}
					/>
					{/* <Button arrowRightProps={button5Props.arrowRightProps} /> */}
				</div>
				<div className="feature-card">
					<CardInfo
						radiologa={cardInfo5Props.radiologa}
						iconProps={cardInfo5Props.iconProps}
					/>
					{/* <Button arrowRightProps={button6Props.arrowRightProps} /> */}
				</div>
				<div className="feature-card">
					<CardInfo
						radiologa={cardInfo6Props.radiologa}
						iconProps={cardInfo6Props.iconProps}
					/>
					{/* <Button arrowRightProps={button7Props.arrowRightProps} /> */}
				</div>
			</div>
			<div className="team-section">
				<div className="header-1">
					<div className="header-2">
						<p className="los-mejores-mdicos">{losMejoresMdicos}</p>
						<p className="somos-un-equipo-de-p gothamrounded-book-normal-thunder-16px">
							{somosUnEquipoDeP}
						</p>
					</div>
					<div className="ct-as">
						{/* <a
							href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-lp-ui-kit&utm_medium=figma-samples"
							target="_blank"
						>
							<div className="button">
								<ArrowRight className={arrowRight1Props.className} />
								<div className="label poppins-semi-bold-white-16px">
									{label}
								</div>
							</div>
						</a> */}
					</div>
				</div>
				<div className="veterinarian-photo">
					<div className="overlap-group1">
						<div className="photo-background"></div>
						<img
							className="veterinarian-photo-1"
							src={veterinarianPhoto}
							alt="Veterinarian photo"
						/>
						<PatientsCard />
					</div>
				</div>
			</div>
			<Testimonials22
				realStoriesFromSatisfiedCustomers={
					testimonials22Props.realStoriesFromSatisfiedCustomers
				}
				seeHowOurLanding={testimonials22Props.seeHowOurLanding}
				testimonialCard21Props={testimonials22Props.testimonialCard21Props}
				testimonialCard22Props={testimonials22Props.testimonialCard22Props}
			/>
			<div className="contact-form" id="contacto">
				<div className="contact-form-1">
					<div className="header">
						<div className="header">
							<div className="headline-subhead-1">
								<div className="comunicate-con-nosotros gothamrounded-bold-thunder-38px">
									{comunicateConNosotros}
								</div>
								<p className="tenes-alguna-duda-s body-m">{tenesAlgunaDudaS}</p>
							</div>
							<div className="contact-details">
								<div className="contact-details-2">
									<div className="contact-details-2-item">
										<img
											class="phone-call-2"
											src="/img/envelopesimple-1.svg"
											alt="PhoneCall"
										></img>
										<div className="text-5-1 body-m">
											{"info@vethome.com.ar"}
										</div>
									</div>
								</div>
								<Phone22 text5={phone221Props.text5} />
								{/* <Phone22 text5={phone222Props.text5} /> */}
							</div>
						</div>
						<div className="social-media">
							<div className="conectate-con-nosotros display-xs">
								{conectateConNosotros}
							</div>
							<div className="social-links">
								<a
									href="https://www.instagram.com/vethome.pilar/"
									target="_blank"
								>
									<img
										className="social-icons"
										src="/img/social-icons-1.svg"
										alt="Social Icons"
									/>
								</a>
							</div>
						</div>
					</div>
					<form
						className="macbook-air-1 screen"
						name="form1"
						action="form1"
						method="post"
						onSubmit={handleSubmit}
					>
						<div className="typeforms-ct-as">
							<div className="typeforms">
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
								<div className="input-field">
									<div className="icon">
										<ArrowRight className={arrowRight2Props.className} />
										<div className="divider"></div>
									</div>
									<input
										className="telfono body-m"
										// name="phone"
										// placeholder="Teléfono"
										// type={inputType1}
										// required
										// inputType={"phone"}
										// inputPlaceholder={"Teléfono"}
										// icon2Props={inputField3Props.icon2Props}
										// value={formData.phone}
										// onChange={handleChange}
										inputType={"phone"}
										inputPlaceholder={"Teléfono"}
										// icon2Props={inputField3Props.icon2Props}
										value={formData.phone}
										onChange={handleChange}
										name="phone"
										required
									/>
								</div>
								<div className="input-field-1">
									<IconMensaje className={icon2Props.className} />

									<input
										className="mensaje body-m"
										name="mensaje"
										placeholder="Mensaje"
										type={inputType2}
										required
									/>
								</div>
							</div>
							<Button2 />
						</div>
					</form>
				</div>
			</div>
			<Footer22>{footer22Props.children}</Footer22>
		</div>
	);
}

export default LandingPageV1Mobile;
