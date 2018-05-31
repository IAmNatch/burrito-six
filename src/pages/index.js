import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

export default class IndexPage extends React.Component {
<<<<<<< HEAD
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;
		const frontmatter = posts[0].node.frontmatter;
		return (
			<section className="section">
				<div className="container">
					<div className="content">
						<h1 className="has-text-weight-bold is-size-2">
							Latest Stories
						</h1>
						<h2>{frontmatter.title}</h2>
					</div>
					{/* {posts
=======
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {posts
>>>>>>> parent of 4a21dc4... working home query
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
<<<<<<< HEAD
            ))} */}
				</div>
			</section>
		);
	}
=======
            ))}
        </div>
      </section>
    )
  }
>>>>>>> parent of 4a21dc4... working home query
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export const pageQuery = graphql`
<<<<<<< HEAD
	query IndexQuery {
		allMarkdownRemark(filter: { frontmatter: { title: { eq: "Home" } } }) {
			edges {
				node {
					id
					frontmatter {
						title
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`;
=======
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
>>>>>>> parent of 4a21dc4... working home query
