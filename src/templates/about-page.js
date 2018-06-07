import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import Helmet from "react-helmet";
import styled from "styled-components";

import { PageWrapper } from "../components/about/Layout.js";
import { Header } from "../components/about/header/Header.js";
import { Description } from "../components/Description.js";
import { Nav } from "../components/Nav.js";

export const AboutPageTemplate = ({
	title,
	subtitle,
	list_name,
	content,
	contentComponent,
}) => {
	const PageContent = contentComponent || Content;

	return (
		<PageWrapper>
			<Helmet title="Burri.to | About " />
			<Nav />
			<Header title={title} />
			<Description content={content} />
		</PageWrapper>
	);
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<AboutPageTemplate
			contentComponent={HTMLContent}
			title={post.frontmatter.title}
			list_name={post.frontmatter.list_name}
			subtitle={post.frontmatter.subtitle}
			content={post.html}
		/>
	);
};

AboutPage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				subtitle
				list_name
			}
			html
		}
	}
`;
