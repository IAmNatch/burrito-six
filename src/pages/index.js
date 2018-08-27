import React from "react";
import PropTypes from "prop-types";
//import Link from "gatsby-link";

import { PageWrapper } from "../components/layout/Layout.js";
import HomeBody from "../components/HomeBody";
import { Nav } from "../components/nav/Nav.js";
import { Header } from "../components/header/Header";

export default class IndexPage extends React.Component {
	render() {
		const { data } = this.props;
		const { page, scores, dateupdated } = data;
		const { edges: posts } = scores;

		const date = dateupdated.edges[0].node.frontmatter.date;

		console.log(date)
		console.log('THIS IS DATA', data)
		// const frontmatter = posts[0].node.frontmatter;
		console.log("props in index", this.props);
		//console.log("REVIEW", posts);

		return (
			<PageWrapper>
				<Nav date={"Updated August 2018"}/>
				<Header title={"Burri.To"}/>
				<HomeBody posts={posts} />
			</ PageWrapper>
		);
	}
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
};

export const pageQuery = graphql`
query IndexQuery {
	page: allMarkdownRemark(
		filter: { frontmatter: { isPage: { eq: true } } }
	) {
		edges {
			node {
				id
				frontmatter {
					title
					subtitle
					list_name
				}
			}
		}
	}
	scores: allMarkdownRemark(
		filter: { frontmatter: { templateKey: { eq: "burrito-review" } } }
	) {
		edges {
			node {
				id
				frontmatter {
					title
					rank
					overall_score
					drip_score
					style_score
					flavor_score
					ingredient_score
					review
					restaurant_name
					highlights {
						highlight_data
					}
					sub
				}
				fields {
					slug
				}
			}
		}
	}
	dateupdated: allMarkdownRemark(
		filter: { frontmatter: { date: { ne: null } } },
		sort: {fields: [frontmatter___date], order: DESC},
		limit: 1
	) {
		edges {
			node {
				id
				frontmatter {
					date
				}
				}
			}
		}
	}
`;
