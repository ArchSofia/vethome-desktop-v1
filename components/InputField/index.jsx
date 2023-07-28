import React from "react";
import Icon2 from "../Icon2";
import "./InputField.css";
import IconEmail from "../IconEmail";

function InputField(props) {
	const { inputType, inputPlaceholder, icon2Props, value, onChange, name } =
		props;

	return (
		<div className="input-field-2">
			<Icon2 className={icon2Props.className} />

			<input
				className="full-name body-m"
				value={value}
				onChange={onChange}
				name={name}
				placeholder={inputPlaceholder}
				type={inputType}
				required
			/>
		</div>
	);
}

export default InputField;
