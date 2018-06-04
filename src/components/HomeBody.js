import React from "react";
import styled from "styled-components";
import ScoreCard from "./ScoreCard.js";

const HomeBodyWrapper = styled.div`
	padding-left: 20%;
	padding-right: 20%;
	background-color: orange;
	padding-top: 5%;
	padding-bottom: 7.5%;
`;
// const AllScoreCards = props.

export default props => {
	let ScoreCardJSX = props.posts.map(({ node: element }, i) => {
		let frontmatter = element.frontmatter;
		return <ScoreCard key={i} data={frontmatter} />;
	});

	return <HomeBodyWrapper>{ScoreCardJSX}</HomeBodyWrapper>;
};
