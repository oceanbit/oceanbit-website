import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import layoutStyles from "./layout.module.scss"
import { ThemeProvider } from "../../constants/theme-context"
import { ButtonBase } from "@material-ui/core"
import "../../global.scss"

export const Layout = ({ children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

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
  `)

  return (
    <ThemeProvider>
      <header
        className={layoutStyles.header}
        aria-label={"Toolbar for primary action buttons"}
      >
        <img height="48" width="48" src={data.file.childImageSharp.fixed.src} />
        <p role="img" className={layoutStyles.logoText}>
          OceanBit
        </p>
        <hr className={layoutStyles.hr} />
        <ButtonBase className={layoutStyles.linkBase}>
          <Link
            to="/"
            className={layoutStyles.headerLink}
            activeClassName={layoutStyles.activeLink}
          >
            Home
          </Link>
        </ButtonBase>
        <ButtonBase className={layoutStyles.linkBase}>
          <Link
            to="/contributions"
            className={layoutStyles.headerLink}
            activeClassName={layoutStyles.activeLink}
          >
            Contributions
          </Link>
        </ButtonBase>

        <ButtonBase className={layoutStyles.linkBase}>
          <Link
            to="/blog"
            partiallyActive={true}
            className={layoutStyles.headerLink}
            activeClassName={layoutStyles.activeLink}
          >
            Blog
          </Link>
        </ButtonBase>
      </header>
      <div>{children}</div>
    </ThemeProvider>
  )
}
