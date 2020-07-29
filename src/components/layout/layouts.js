import * as React from "react";
import { graphql, Link } from "gatsby";
// import layoutStyles from "./layout.module.scss";
import { ThemeProvider } from "../../constants/theme-context";
import "../../global.scss";

export const Layout = ({ children }) => {
	const rootPath = `${__PATH_PREFIX__}/`;

	return (
		<ThemeProvider>
				<header
					aria-label={"Toolbar for primary action buttons"}
				>
					<h1>Header!</h1>
				</header>
				<div>
					{children}
				</div>
		</ThemeProvider>
	);
};

// export const authorFragmentQuery = graphql`
// 	fragment UnicornInfo on UnicornsJson {
// 		name
// 		id
// 		description
// 		color
// 		fields {
// 			isAuthor
// 		}
// 		roles {
// 			prettyname
// 			id
// 		}
// 		socials {
// 			twitter
// 			github
// 			website
// 			linkedIn
// 			twitch
// 			dribbble
// 		}
// 		pronouns {
// 			they
// 			them
// 			their
// 			theirs
// 			themselves
// 		}
// 		profileImg {
// 			childImageSharp {
// 				smallPic: fixed(width: 60) {
// 					...GatsbyImageSharpFixed
// 				}
// 				mediumPic: fixed(width: 85) {
// 					...GatsbyImageSharpFixed
// 				}
// 				bigPic: fixed(width: 300, quality: 100) {
// 					...GatsbyImageSharpFixed
// 				}
// 			}
// 		}
// 	}
// `;

// export const postFragmentQuery = graphql`
// 	fragment PostInfo on MarkdownRemark {
// 		id
// 		excerpt(pruneLength: 160)
// 		html
// 		frontmatter {
// 			title
// 			published(formatString: "MMMM DD, YYYY")
// 			edited(formatString: "MMMM DD, YYYY")
// 			tags
// 			description
// 			authors {
// 				...UnicornInfo
// 			}
// 			license {
// 				licenceType
// 				footerImg
// 				explainLink
// 				name
// 				displayName
// 			}
// 		}
// 		fields {
// 			slug
// 			inlineCount
// 			headingsWithId {
// 				value
// 				slug
// 				depth
// 			}
// 		}
// 		wordCount {
// 			words
// 		}
// 	}
// `;
