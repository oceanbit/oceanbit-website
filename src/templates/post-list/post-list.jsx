import * as React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import { Pagination } from "../../components/pagination"

const BlogPostListTemplate = ({ pageContext }) => {
	const { posts, pageIndex, pageCount } = pageContext

	const SEOTitle = pageIndex === 1 ? "Blog" : `Blog page ${pageIndex}`;

	return (
    <div>
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
            <Link to={`/blog${post.fields.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>

      <Pagination
        pageCount={pageCount}
        pageIndex={pageIndex}
        rootPath={"/"}
        pagePath={"/page"}
      />
    </div>
  )
}

export default BlogPostListTemplate
