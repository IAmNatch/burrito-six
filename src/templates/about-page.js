import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import styled from 'styled-components';
import { PageWrapper } from "../components/about/PageWrapper.js";
//import { Header } from "../components/about/Header.js";

const PageWrapperStyle = styled.div`

  grid-template-rows: [jumbo]30vh [content]60vw;
  display: grid;
  height: 100vh;
  background: #00AF96;
  
`

const HeaderWrapper = styled.div`
  background: white;
  grid-row: 1/2;

  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled.h1`
  color: black;
  font-size: 2em;
  display: inline-block;
`

export const AboutPageTemplate = ({
  title,
  subtitle,
  list_name
	//content,
	//contentComponent,
}) => {
	//const PageContent = contentComponent || Content;

	return (
      <PageWrapperStyle>
        <HeaderWrapper>
          <HeaderText>About</HeaderText>
        </HeaderWrapper>
      </PageWrapperStyle>

/* 	<section className="section section--gradient">
			<div className="container">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<div className="section">
							<h2 className="title is-size-3 has-text-weight-bold is-bold-light">
								{title}
							</h2>
							<h2>{subtitle}</h2>
							<PageContent className="content" content={content} />
						</div>
					</div>
				</div>
			</div>
		</section>  */

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
			//contentComponent={HTMLContent}
			title={post.frontmatter.title}
			//content={post.html}
      list_name={post.frontmatter.list_name}
      subtitle={post.frontmatter.subtitle}
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
		}
	}
`;
