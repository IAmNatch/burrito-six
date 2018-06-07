import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const TemplateWrapper = ({ children }) => {
		const {pathname} = window.location;
		let background = pathname === "/" ? "#FDD112" : "#00AF96"

		return (
			<div style={{ minHeight: '100vh', backgroundColor: background}}>
				<Helmet title="Burri.to | Home" >
					<link rel="stylesheet" type="text/css" href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css' />
				</Helmet>
				<div>{children()}</div>
			</div>
	)
};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
