import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import styled from 'styled-components';
//import { PageWrapper } from "../components/about/PageWrapper.js";
//import { Header } from "../components/about/Header.js";

const PageWrapperStyle = styled.div`
  grid-template-rows: [jumbo]30vh [content]60vw;
  display: grid;
  height: 100vh;
  
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
  font-weight: 700;
` 
const BioWrapper = styled.div`
  margin-bottom: 2vmax;
  margin: auto;
  width: auto;
  padding: 5%;
  box-shadow: 0 0 3px 3px rgba(1, 1, 1, 0.4);
  background-color: white;
  margin-bottom: 30%;
`;

const ContentWrapper = styled.div`
  grid-row: 2/3;
  background: #00AF96;
  display: flex;
`;

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
          <HeaderText>{title}</HeaderText>
        </HeaderWrapper>
        <ContentWrapper>
          <BioWrapper>
              Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          </BioWrapper>
        </ContentWrapper>
      </PageWrapperStyle>

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
