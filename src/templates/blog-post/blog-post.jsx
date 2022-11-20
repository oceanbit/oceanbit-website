import * as React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import { Layout } from "../../components/layout"
import style from "./blog-post.module.scss"

const BlogPostListTemplate = ({ data: { markdownRemark } }) => {
	const [monthName, dayNum] = markdownRemark.frontmatter.date.split(' ');

	return (
		<Layout title="Blog">
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
			<div className={style.postContainer}>
				<div className={style.postContents}>
					<h2 className={style.postTitle}>{markdownRemark.frontmatter.title}</h2>
					<p className={style.date}>{monthName} <br/><span className={style.day}>{dayNum}</span></p>
					<div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
				</div>
			</div>
		</Layout>
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
        date(formatString: "MMMM DD")
      }
    }
  }
`
