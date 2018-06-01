import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
// Importing Ben's Components:
import ScoreCard from "../components/ScoreCard";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const frontmatter = posts[0].node.frontmatter;
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{frontmatter.title}</h1>
          </div>
          <div className="index-scorecard-wrapper">
            <ScoreCard />
          </div>
          {/* {posts
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))} */}
        </div>
      </section>
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
      filter: {frontmatter: {title: {eq: "Home"}}}) {
      edges {
       node 
        {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`
