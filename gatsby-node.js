/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const maxArticlesOnPage = 5

const getPostPages = posts =>
  posts.reduce((pageArr, post, i) => {
    const pageNum = Math.floor(i / maxArticlesOnPage)
    pageArr[pageNum] = pageArr[pageNum] || []
    pageArr[pageNum].push(post)
    return pageArr
  }, [])

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postList = path.resolve(`./src/templates/post-list/post-list.jsx`)
  const blogPost = path.resolve(`./src/templates/blog-post/blog-post.jsx`)
  const homePage = path.resolve(`./src/templates/home/home.jsx`)
  const contributionsPage = path.resolve(
    `./src/templates/contributions/contributions.jsx`
  )

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              excerpt(pruneLength: 360)
              frontmatter {
                title
                date(formatString: "MMMM DD")
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    createPage({
      path: `/`,
      component: homePage,
    })

    createPage({
      path: `/contributions`,
      component: contributionsPage,
    })

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges.map(post => post.node)

    posts.forEach(post => {
      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.fields.slug,
        },
      })
    })

    const postPages = getPostPages(posts)

    createPage({
      path: `/blog`,
      component: postList,
      context: {
        pageIndex: 1,
        posts: postPages[0],
        pageCount: postPages.length,
      },
    })

    for (let i = 1; i < postPages.length; i++) {
      createPage({
        path: `/blog/page/${i + 1}`,
        component: postList,
        context: {
          pageIndex: i,
          posts: postPages[i],
          pageCount: postPages.length,
        },
      })
    }

    return null
  })
}
