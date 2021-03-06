import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import HomeSplash from "../components/HomeSplash";
import HomeBody from "../components/HomeBody";
import { Nav } from "../components/nav/Nav.js";

export default class IndexPage extends React.Component {
	render() {
		const { data } = this.props;
		const { page, scores } = data;
		const { edges: posts } = scores;
		// const frontmatter = posts[0].node.frontmatter;
		console.log("props in index", this.props);
		console.log("REVIEW", posts);
		return (
			<div>
				<Nav />
				<HomeSplash />
				<HomeBody posts={posts} />
			</div>
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
	}
`;
