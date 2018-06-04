import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import HomeSplash from '../components/HomeSplash';
import HomeBody from "../components/HomeBody";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const frontmatter = posts[0].node.frontmatter;

    //console.log('REVIEW', frontmatter.review)

    return (
      <div>


            <HomeSplash />
            
            
          {posts
            .map(({ node: post }) => (
              
              <HomeBody 
                  title={post.frontmatter.title}
                  score={post.frontmatter.flavor_score}
                  
                  
              
              />
            ))}

      </div>
    )
  }
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "burrito-review"}}}) {
      edges {
       node 
        {
          id
          frontmatter {
            title
            restaurant
          }
        }
      }
    }
  }
`
