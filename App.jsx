import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LandingPageV1Mobile from "./components/LandingPageV1Mobile";
import MacBookAir1 from "./components/MacBookAir1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/landing-page-v1-mobile">
          <LandingPageV1Mobile {...landingPageV1MobileData} />
        </Route>
        <Route path="/:path(|macbook-air-1)">
          <MacBookAir1 {...macBookAir1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const navbarData = {
    children: "VET HOME",
};

const botonData = {
    children: "Contactanos",
};

const group9Data = {
    screenShot20230417At20422: "/img/screen-shot-2023-04-17-at-20-42-2-1@2x.png",
    screenShot20230417At20402: "/img/screen-shot-2023-04-17-at-20-40-2@2x.png",
    text4: "1,000",
    pacientesRegistrados: "Pacientes registrados",
    screenShot20230417At20372: "/img/screen-shot-2023-04-17-at-20-37-2@2x.png",
    bordercollie: "/img/bordercollie-1@2x.png",
    disponibleParaConsulta: "Disponible para consulta",
    drGuadalupePoggi: "Dr. Guadalupe Poggi",
    veterinaria: "Veterinaria",
    screenShot20230417At20152: "/img/screen-shot-2023-04-17-at-20-15-2-2@2x.png",
};

const icon1Data = {
    src: "/img/raio-x-1-1@2x.png",
};

const cardInfo1Data = {
    radiologa: "Radiología",
    iconProps: icon1Data,
};

const arrowRight1Data = {
    className: "",
};

const button1Data = {
    arrowRightProps: arrowRight1Data,
};

const icon2Data = {
    src: "/img/ecografia-1-1@2x.png",
};

const cardInfo2Data = {
    radiologa: "Ecografía",
    iconProps: icon2Data,
};

const arrowRight2Data = {
    className: "arrow-right",
};

const button2Data = {
    arrowRightProps: arrowRight2Data,
};

const icon3Data = {
    src: "/img/intensivista-1-1@2x.png",
};

const arrowRight3Data = {
    className: "arrow-right",
};

const button3Data = {
    arrowRightProps: arrowRight3Data,
};

const icon4Data = {
    src: "/img/surgeon-3056783-1-1@2x.png",
};

const cardInfo3Data = {
    radiologa: "Cirugía",
    iconProps: icon4Data,
};

const arrowRight4Data = {
    className: "arrow-right",
};

const button4Data = {
    arrowRightProps: arrowRight4Data,
};

const icon5Data = {
    src: "/img/gastroenterologist-847211-1-1@2x.png",
};

const cardInfo4Data = {
    radiologa: "Especialidades",
    iconProps: icon5Data,
};

const arrowRight5Data = {
    className: "arrow-right",
};

const button5Data = {
    arrowRightProps: arrowRight5Data,
};

const icon6Data = {
    src: "/img/pet-shop-6317382-1-1@2x.png",
};

const cardInfo5Data = {
    radiologa: "Pet Shop",
    iconProps: icon6Data,
};

const arrowRight6Data = {
    className: "arrow-right",
};

const button6Data = {
    arrowRightProps: arrowRight6Data,
};

const icon7Data = {
    src: "/img/pet-grooming-6317351-1-1@2x.png",
};

const cardInfo6Data = {
    radiologa: "Peluquería",
    iconProps: icon7Data,
};

const arrowRight7Data = {
    className: "arrow-right",
};

const button7Data = {
    arrowRightProps: arrowRight7Data,
};

const arrowRight8Data = {
    className: "rocket-launch",
};

const clientInfo1Data = {
    photo: "/img/photo-2@2x.png",
    name: "Vevis V.",
    uiDesignerBoo: "Dueña de Kibbi",
};

const testimonialCard221Data = {
    animasLandingPag: `"Encuentro la mejor atención en vethome y tengo todo en un mismo lugar: alimentos, baño y corte y atención 24hs de veterinarios en un solo lugar"`,
    clientInfoProps: clientInfo1Data,
};

const clientInfo2Data = {
    photo: "/img/photo-3@2x.png",
    name: "Silver N.",
    uiDesignerBoo: "Dueño de Limón",
};

const testimonialCard222Data = {
    animasLandingPag: "“Quiero agradecer a todo el equipo. Tuve que castrar a mi gato Limón y salió de la cirugía sin ningún dolor. Hicimos un control semanas después y no pudo haber salido mejor”",
    clientInfoProps: clientInfo2Data,
};

const testimonials22Data = {
    realStoriesFromSatisfiedCustomers: "Que dicen nuestros pacientes",
    seeHowOurLanding: "Mira el impacto que nuestros servicios veterinarios generan",
    testimonialCard21Props: testimonialCard221Data,
    testimonialCard22Props: testimonialCard222Data,
};

const phone221Data = {
    text5: "+012 345 6789",
};

const phone222Data = {
    text5: "info@vethome.com.ar",
};

const icon22Data = {
    className: "",
};

const inputField1Data = {
    inputType: "text",
    inputPlaceholder: "Full Name",
    icon2Props: icon22Data,
};

const icon23Data = {
    className: "icon-3",
};

const inputField2Data = {
    inputType: "email",
    inputPlaceholder: "Email",
    icon2Props: icon23Data,
};

const arrowRight9Data = {
    className: "user",
};

const icon24Data = {
    className: "icon-3",
};

const footer22Data = {
    children: "© 2023 Made with ♡ by D-team.",
};

const landingPageV1MobileData = {
    clnicaVeterinaria: "Clínica Veterinaria",
    tuFamiliaEsImportanteParaNosotros: <React.Fragment>Tu familia es importante <br />para nosotros</React.Fragment>,
    estamos24HorasAl: "Estamos 24 horas al día disponibles para la salud de tus mascotas.",
    quServiciosOfrecemos: "¿Qué servicios ofrecemos?",
    estamosAlServicio: "Estamos al servicio con todo el equipo médico y personal especializado para lo que necesites.",
    unidadDeCuidadosIntensivos: "Unidad de cuidados intensivos",
    imagenPorRayosXP: "Imagen por rayos X para diagnóstico de patologías y lesiones.",
    losMejoresMdicos: "Los mejores médicos veterinarios de todas las especializaciones.",
    somosUnEquipoDeP: "Somos un equipo de profesionales especializados graduados de las mejores universidades veterinarias del país. Nuestro staff experimentado trabaja para brindarle a tu mascota la mejor atención.",
    label: "Contactanos",
    veterinarianPhoto: "/img/veterinarian-photo-1@2x.png",
    comunicateConNosotros: "Comunicate con nosotros",
    tenesAlgunaDudaS: "¿Tenes alguna duda sobre nuestros servicios? Nuestro equipo está disponible para ayudarte.",
    conectateConNosotros: "Conectate  con nosotros",
    inputType1: "text",
    inputPlaceholder1: "Full Name",
    inputType2: "text",
    inputPlaceholder2: "Full Name",
    navbarProps: navbarData,
    botonProps: botonData,
    group9Props: group9Data,
    cardInfo1Props: cardInfo1Data,
    button1Props: button1Data,
    cardInfo2Props: cardInfo2Data,
    button2Props: button2Data,
    iconProps: icon3Data,
    button3Props: button3Data,
    cardInfo3Props: cardInfo3Data,
    button4Props: button4Data,
    cardInfo4Props: cardInfo4Data,
    button5Props: button5Data,
    cardInfo5Props: cardInfo5Data,
    button6Props: button6Data,
    cardInfo6Props: cardInfo6Data,
    button7Props: button7Data,
    arrowRight1Props: arrowRight8Data,
    testimonials22Props: testimonials22Data,
    phone221Props: phone221Data,
    phone222Props: phone222Data,
    inputField1Props: inputField1Data,
    inputField2Props: inputField2Data,
    arrowRight2Props: arrowRight9Data,
    icon2Props: icon24Data,
    footer22Props: footer22Data,
};

const botonContactanosData = {
    children: "Contactanos",
};

const frame1Data = {
    botonContactanosProps: botonContactanosData,
};

const icon8Data = {
    src: "/img/ecografia-1@2x.png",
};

const cardInfo22Data = {
    ecografa: "Ecografía",
    diagnsticoDeImge: "Diagnóstico de imágenes para visualizar los órganos y tejidos",
    iconProps: icon8Data,
};

const arrowRight10Data = {
    className: "arrow-right-1",
};

const button8Data = {
    arrowRightProps: arrowRight10Data,
};

const icon9Data = {
    src: "/img/raio-x-1@2x.png",
};

const cardInfo23Data = {
    ecografa: "Radiología",
    diagnsticoDeImge: "Imagen por rayos X para diagnóstico de patologías y lesiones.",
    iconProps: icon9Data,
};

const arrowRight11Data = {
    className: "arrow-right-3",
};

const button9Data = {
    arrowRightProps: arrowRight11Data,
};

const featureCardData = {
    cardInfo2Props: cardInfo23Data,
    buttonProps: button9Data,
};

const icon10Data = {
    src: "/img/intensivista-1@2x.png",
};

const cardInfo42Data = {
    internacinYTratamiento: "Internación y tratamiento",
    iconProps: icon10Data,
};

const arrowRight12Data = {
    className: "arrow-right-1",
};

const button10Data = {
    arrowRightProps: arrowRight12Data,
};

const icon11Data = {
    src: "/img/surgeon-3056783-1@2x.png",
};

const cardInfo24Data = {
    ecografa: "Cirugía",
    diagnsticoDeImge: "Cirugías ambulatorias con los mejores profesionales",
    iconProps: icon11Data,
};

const arrowRight13Data = {
    className: "arrow-right-1",
};

const button11Data = {
    arrowRightProps: arrowRight13Data,
};

const icon12Data = {
    src: "/img/pet-grooming-6317351-1@2x.png",
};

const cardInfo25Data = {
    ecografa: "Peluquería",
    diagnsticoDeImge: "Servicios de peluquería y baño para tus mascotas",
    iconProps: icon12Data,
};

const arrowRight14Data = {
    className: "arrow-right-1",
};

const button12Data = {
    arrowRightProps: arrowRight14Data,
};

const icon13Data = {
    src: "/img/gastroenterologist-847211-1@2x.png",
};

const cardInfo26Data = {
    ecografa: "Especialidades",
    diagnsticoDeImge: "Contamos con profesionales especializados",
    iconProps: icon13Data,
};

const arrowRight15Data = {
    className: "arrow-right-1",
};

const button13Data = {
    arrowRightProps: arrowRight15Data,
};

const icon14Data = {
    src: "/img/pet-shop-6317382-1@2x.png",
};

const arrowRight16Data = {
    className: "arrow-right-1",
};

const button14Data = {
    arrowRightProps: arrowRight16Data,
};

const veterinarianCardData = {
    screenShot20230417At20152: "/img/screen-shot-2023-04-17-at-20-15-2-1@2x.png",
    drGuadalupePoggio: "Dr. Guadalupe Poggio",
    veterinaria: "Veterinaria",
    text2: "4.9",
    star_37941581: "/img/star-3794158-1@2x.png",
    x1200Pacientes: "1200+ Pacientes",
    universidadDeBuenosAires: "Universidad de Buenos Aires",
};

const patientsCard2Data = {
    className: "patients-card-1",
};

const starRating3Data = {
    className: "star-rating-1-1",
};

const testimonialCard1Data = {
    photo: "/img/photo@2x.png",
    laurenM: "Vevis V.",
    uiDesignerBoo: "Dueña de Kibbi",
    animasLandingPag: `"Encuentro la mejor atención en Vethome y tengo todo en un mismo lugar: alimentos, baño y corte y atención 24hs de veterinarios en un solo lugar"`,
    starRatingProps: starRating3Data,
};

const starRating4Data = {
    className: "star-rating-1",
};

const testimonialCard2Data = {
    photo: "/img/photo-1@2x.png",
    laurenM: "Silver N.",
    uiDesignerBoo: "Dueño de Limón",
    animasLandingPag: "“Quiero agradecer a todo el equipo. Tuve que castrar a mi gato Limón y salió de la cirugía sin ningún dolor. Hicimos un control semanas después y no pudo haber salido mejor”",
    starRatingProps: starRating4Data,
};

const testimonialsData = {
    realStoriesFromSatisfiedCustomers: "Que dicen nuestros pacientes",
    seeHowOurLanding: "Mira el impacto que nuestros servicios veterinarios generan",
    testimonialCard1Props: testimonialCard1Data,
    testimonialCard2Props: testimonialCard2Data,
};

const phone1Data = {
    text1: "+012 345 6789",
};

const phone2Data = {
    text1: "info@vethome.com.ar",
};

const contactDetailsData = {
    phone1Props: phone1Data,
    phone2Props: phone2Data,
};

const icon25Data = {
    className: "",
};

const inputField3Data = {
    inputType: "text",
    inputPlaceholder: "Full Name",
    icon2Props: icon25Data,
};

const icon26Data = {
    className: "icon-3",
};

const inputField4Data = {
    inputType: "email",
    inputPlaceholder: "Email",
    icon2Props: icon26Data,
};

const icon27Data = {
    className: "icon-3",
};

const inputField5Data = {
    inputType: "number",
    inputPlaceholder: "Email",
    icon2Props: icon27Data,
};

const icon28Data = {
    className: "icon-3",
};

const footerData = {
    children: "© 2023 Made with ♡  by D-team.",
};

const macBookAir1Data = {
    vetHome: "VET HOME",
    screenShot20230417At20422: "/img/screen-shot-2023-04-17-at-20-42-2@2x.png",
    circuloNaranja: "/img/circulo-naranja@2x.png",
    text3: "1,000",
    pacientesRegistrados: "Pacientes registrados",
    screen_Shot_20230722_At_17321: "/img/screen-shot-2023-07-22-at-17-32-1@2x.png",
    bordercollie: "/img/bordercollie.png",
    drGuadalupePoggi: "Dr. Guadalupe Poggi",
    veterinaria: "Veterinaria",
    disponibleParaConsulta: "Disponible para consulta",
    screenShot20230417At20152: "/img/screen-shot-2023-04-17-at-20-15-2@2x.png",
    features: "¿Qué servicios ofrecemos?",
    estamosAlServicio: "Estamos al servicio con todo el equipo médico y personal especializado para lo que necesites.",
    petShop: "Pet Shop",
    alimentosAccesorio: "Alimentos, accesorios y medicación para tus mascotas",
    veterinarianPhoto: "/img/veterinarian-photo.png",
    comunicateConNosotros: "Comunicate con nosotros",
    tenesAlgunaDudaS: "¿Tenes alguna duda sobre nuestros servicios? Nuestro equipo está disponible para ayudarte.",
    connectWithUs: "Conectate con nosotros",
    inputType: "number",
    inputPlaceholder: "Email",
    frame1Props: frame1Data,
    cardInfo21Props: cardInfo22Data,
    button1Props: button8Data,
    featureCardProps: featureCardData,
    cardInfo4Props: cardInfo42Data,
    button2Props: button10Data,
    cardInfo22Props: cardInfo24Data,
    button3Props: button11Data,
    cardInfo23Props: cardInfo25Data,
    button4Props: button12Data,
    cardInfo24Props: cardInfo26Data,
    button5Props: button13Data,
    iconProps: icon14Data,
    button6Props: button14Data,
    veterinarianCardProps: veterinarianCardData,
    patientsCardProps: patientsCard2Data,
    testimonialsProps: testimonialsData,
    contactDetailsProps: contactDetailsData,
    inputField1Props: inputField3Data,
    inputField2Props: inputField4Data,
    inputField3Props: inputField5Data,
    icon2Props: icon28Data,
    footerProps: footerData,
};

