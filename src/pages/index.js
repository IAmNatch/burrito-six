import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import HomeSplash from "../components/HomeSplash";
import HomeBody from "../components/HomeBody";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { page, scores } = data;
    const { edges: posts } = scores;
    // const frontmatter = posts[0].node.frontmatter;

    //console.log('REVIEW', frontmatter.review)
    return (
      <div>
        <HomeSplash />
        {posts.map(({ node: post }) => <HomeBody {...post.frontmatter} />)}
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
      filter: { frontmatter: { title: { eq: "Home" } } }
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
            resteraunt_name
            highlights
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
