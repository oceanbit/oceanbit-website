import * as React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import { Layout } from "../../components/layout"
import { Date, Day, PostContainer, PostContents, PostTitle } from "./blog-post.styles"

const BlogPostListTemplate = ({ data: { markdownRemark } }) => {
  const [monthName, dayNum] = markdownRemark.frontmatter.date.split(" ")

  return (
    <Layout title="Blog">
      <SEO
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.excerpt}
        meta={[
          {
            property: `og:type`,
            content: `article`
          },
          {
            property: `article:published_time`,
            content: markdownRemark.frontmatter.date
          }
        ]}
      />
      <PostContainer>
        <PostContents>
          <PostTitle>{markdownRemark.frontmatter.title}</PostTitle>
          <Date>{monthName} <br/><Day>{dayNum}</Day></Date>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}/>
        </PostContents>
      </PostContainer>
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
