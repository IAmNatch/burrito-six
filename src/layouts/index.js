import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "normalize.css";

//import styled from 'styled-components';
import styled, { injectGlobal } from 'styled-components';

const TemplateWrapper = ({ children }) => {
		// const {pathname} = window.location;
		// let background = pathname === "/" ? "#FDD112" : "#00AF96"
		let background = "#FDD112";

		return (
			<div style={{backgroundColor: background}}>
				<Helmet title="Burri.to | Home" >
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
				</Helmet>
				{children()}
			</div>
	)
};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;
