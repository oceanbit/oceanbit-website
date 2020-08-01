import * as React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import { Pagination } from "../../components/pagination"
import { Layout } from "../../components/layout"

const BlogPostListTemplate = ({ pageContext }) => {
	const { posts, pageIndex, pageCount } = pageContext

	const SEOTitle = pageIndex === 1 ? "Blog" : `Blog page ${pageIndex}`;

	return (
    <Layout title="Blog">
      <SEO
        title={SEOTitle}
        meta={[
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      />
      <ul aria-label={"Blog posts"}>
        {posts.map(post => (
          <li key={post.fields.slug}>
            <Link to={`/blog${post.fields.slug}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>

      {pageCount > 1 && <Pagination
        pageCount={pageCount}
        pageIndex={pageIndex}
        rootPath={"/"}
        pagePath={"/page"}
      />}
    </Layout>
  )
}

export default BlogPostListTemplate
