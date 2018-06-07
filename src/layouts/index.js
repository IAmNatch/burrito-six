import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper = ({ children }) => (
	<div style={{ minHeight: '100vh', backgroundColor: '#00AF96'}}>
		<Helmet title="Burri.to | Home" />
		<div>{children()}</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
