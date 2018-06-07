import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => {
		const {pathname} = window.location;
		let background = pathname === "/" ? "#FDD112" : "#00AF96"

		return (
			<div style={{ minHeight: '100vh', backgroundColor: background}}>
				<Helmet title="Burri.to | Home" />
				<div>{children()}</div>
			</div>
	)
};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
