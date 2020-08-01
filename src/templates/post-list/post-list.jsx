import * as React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"
import { Pagination } from "../../components/pagination"
import { Layout } from "../../components/layout"
import style from './post-list.module.scss';
import { ButtonBase } from "@material-ui/core"
import styles from "../../pages/contributions.module.scss"
import ChevronIcon from "../../assets/chevron.svg"

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
      <ul aria-label={"Blog posts"} className={style.postList}>
        {posts.map(post => (
          <li key={post.fields.slug}>
            <Link to={`/blog${post.fields.slug}`} className={style.postLinkCont}>
              <div className={style.postContents}>
                <h2 className={style.postTitle}>{post.frontmatter.title}</h2>
                <p className={style.date}>July <br/><span className={style.day}>31</span></p>
                <p className={style.excerpt}>{post.excerpt}</p>
                <ButtonBase className={style.readMore}>
                   Read more <ChevronIcon/>
                </ButtonBase>
              </div>
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
