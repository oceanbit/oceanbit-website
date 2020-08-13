import * as React from "react"
import SEO from "../../components/seo"
import { Pagination } from "../../components/pagination"
import { Layout } from "../../components/layout"
import ChevronIcon from "../../assets/chevron.svg"
import Ink from "react-ink"
import {
  Date,
  Day,
  Excerpt,
  PostContents,
  PostLinkCont,
  PostList,
  PostTitle,
  ReadMore,
} from "./post-list.styles"

const BlogPostListTemplate = ({ pageContext }) => {
  const { posts, pageIndex, pageCount } = pageContext

  const SEOTitle = pageIndex === 1 ? "Blog" : `Blog page ${pageIndex}`

  return (
    <Layout title="Blog">
      <SEO
        title={SEOTitle}
        description={
          "Blog posts from OceanBit. We publish announcements of our products and tools, code hints, and more!"
        }
        meta={[
          {
            property: `og:type`,
            content: `website`,
          },
        ]}
      />
      <PostList aria-label={"Blog posts"}>
        {posts.map(post => {
          const [monthName, dayNum] = post.frontmatter.date.split(" ")

          return (
            <li key={post.fields.slug}>
              <PostLinkCont to={`/blog${post.fields.slug}`}>
                <PostContents>
                  <PostTitle>{post.frontmatter.title}</PostTitle>
                  <Date>
                    {monthName} <br />
                    <Day>{dayNum}</Day>
                  </Date>
                  <Excerpt>{post.excerpt}</Excerpt>
                  <ReadMore>
                    Read more <ChevronIcon />
                    <Ink />
                  </ReadMore>
                </PostContents>
              </PostLinkCont>
            </li>
          )
        })}
      </PostList>

      {pageCount > 1 && (
        <Pagination
          pageCount={pageCount}
          pageIndex={pageIndex}
          rootPath={"/"}
          pagePath={"/page"}
        />
      )}
    </Layout>
  )
}

export default BlogPostListTemplate
