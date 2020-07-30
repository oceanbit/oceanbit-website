import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import layoutStyles from "./layout.module.scss";
import { ThemeProvider } from "../../constants/theme-context";
import "../../global.scss";

export const Layout = ({ children }) => {
	const rootPath = `${__PATH_PREFIX__}/`;

	  const data = useStaticQuery(graphql`
			query BlogListPageQuery {
				file(relativePath: { eq: "oceanbit_logo.png" }) {
					childImageSharp {
						fixed(width: 48, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
	`);

console.log(data)

	return (
		<ThemeProvider>
				<header
					className={layoutStyles.header}
					aria-label={"Toolbar for primary action buttons"}
				>
					<img height="48" width="48" src={data.file.childImageSharp.fixed.src}/>
					<p role="img" className={layoutStyles.logoText}>OceanBit</p>
					<hr className={layoutStyles.hr}/>
				</header>
				<div>
					{children}
				</div>
		</ThemeProvider>
	);
};
