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
          {/* <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{frontmatter.title}</h1>
          </div> */}

            <HomeSplash />
            
            
          {posts
            .map(({ node: post }) => (
              
              <HomeBody 
                  title={post.frontmatter.title}
                  score={post.frontmatter.flavor_score}
                  
                  
              
              />
              
/*               <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
          
                    {post.frontmatter.title}
       
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
              </div> */
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
