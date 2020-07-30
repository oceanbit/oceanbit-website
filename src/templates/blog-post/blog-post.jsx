import * as React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"

const BlogPostListTemplate = ({ data: { markdownRemark } }) => {
	return (
		<div>
			<SEO
				title={markdownRemark.frontmatter.title}
				description={markdownRemark.excerpt}
				meta={[
					{
						property: `og:type`,
						content: `article`,
					},
					{
						property: `article:published_time`,
						content: markdownRemark.frontmatter.date,
					},
				]}
			/>
			<header>
				<h1>{markdownRemark.frontmatter.title}</h1>
				<h2>{markdownRemark.frontmatter.date}</h2>
			</header>
			<main dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
			<footer>
				<Link to={'/blog'}>Back to Blog</Link>
			</footer>
		</div>
	)
}

export default BlogPostListTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      html
			excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
