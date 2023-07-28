import React from "react";
import Phone from "../Phone";
import "./ContactDetails.css";

function ContactDetails(props) {
	const { phone1Props, phone2Props } = props;

	return (
		<div className="contact-details-2">
			<Phone text1={phone1Props.text1} />
			{/* <Phone text1={phone2Props.text1} /> */}
			<div className="contact-details-2-item">
				<img
					class="phone-call-2"
					src="/img/envelopesimple-1.svg"
					alt="PhoneCall"
				></img>
				<div className="text-5-1 body-m">{"info@vethome.com.ar"}</div>
			</div>
		</div>
	);
}

export default ContactDetails;
