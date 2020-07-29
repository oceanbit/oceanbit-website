import React, { useContext, useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";

const BlogPostTemplateChild = (props) => {
	const post = props.data.markdownRemark;
	const siteData = props.data.site.siteMetadata;
	const slug = post.fields.slug;

	return (
		<>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
				unicornsData={post.frontmatter.authors}
				publishedTime={post.frontmatter.published}
				editedTime={post.frontmatter.edited}
				keywords={post.frontmatter.tags}
				type="article"
				canonicalPath={props.location.pathname}
			/>
			<article>
				<main
					className="post-body"
					data-testid={"post-body-div"}
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
			</article>
		</>
	);
};

const BlogPostTemplate = (props) => {
	return (
		<Layout>
			<BlogPostTemplateChild {...props} />
		</Layout>
	);
};

export default BlogPostTemplate;

// export const pageQuery = graphql`
// 	query BlogPostBySlug($slug: String!) {
// 		site {
// 			siteMetadata {
// 				title
// 				siteUrl
// 				disqusShortname
// 				repoPath
// 				relativeToPosts
// 			}
// 		}
// 		markdownRemark(fields: { slug: { eq: $slug } }) {
// 			...PostInfo
// 		}
// 	}
// `;
