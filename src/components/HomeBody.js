import React from "react";
import styled from "styled-components";
import ScoreCard from "./ScoreCard.js";
import { sortBy } from "lodash";

const HomeBodyWrapper = styled.div`
	padding-left: 20%;
	padding-right: 20%;
	background-color: #fdd112;
	padding-top: 5%;
	padding-bottom: 7.5%;
`;

const HomeBodyTitle = styled.h1`
	padding:2.5%;
	background:white;
	text-align:center;
	margin:0 15% 10% 15%;
	font-size:2.5vmax;
`

// const AllScoreCards = props.

export default props => {
	let ScoreCardJSX = props.posts.map(({ node: element }, i) => {
		let frontmatter = element.frontmatter;
		return <ScoreCard key={i} data={frontmatter} />;
	});
	let ScoreCardsSorted = sortBy(ScoreCardJSX, [
		function(item) {
			return item.props.data.rank;
		},
	]);

	return <HomeBodyWrapper><HomeBodyTitle>The Rankings</HomeBodyTitle>{ScoreCardsSorted}</HomeBodyWrapper>;
};
