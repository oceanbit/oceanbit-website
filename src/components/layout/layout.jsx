import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import layoutStyles from "./layout.module.scss"
import { ThemeProvider } from "../../constants/theme-context"
import { ButtonBase } from "@material-ui/core"
import "../../global.scss"

export const Layout = ({ children, title }) => {
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

  const [expanded, setExpanded] = React.useState(false);

  const links = (
    <div className={layoutStyles.linkContainer}>
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
    </div>
  )

  return (
    <ThemeProvider>
      <header
        aria-label={"Toolbar for primary action buttons"}
        style={{ position: "relative" }}
      >
        <div className={layoutStyles.desktopHeader}>
          <a href="/" className={layoutStyles.logoContainer}>
            <img
              height="48"
              width="48"
              src={data.file.childImageSharp.fixed.src}
            />
            <span className={layoutStyles.logoText}>OceanBit</span>
          </a>
          <hr className={layoutStyles.hr} />
          {links}
        </div>
        <div className={layoutStyles.mobileHeader}>
          <div
            onClick={() => setExpanded(v => !v)}
            style={{ background: "blue", width: "24px", height: "24px" }}
          ></div>
          <h1 className={layoutStyles.pageTitle}>{title}</h1>
          <img
            height="36"
            width="36"
            src={data.file.childImageSharp.fixed.src}
          />
        </div>
        <div
          className={layoutStyles.mobileExpandedContainer}
          style={{ top: expanded ? "100%" : "-100vh" }}
        >
          {links}
        </div>
        <div className={`${layoutStyles.scrim} ${expanded ? layoutStyles.activeScrim : ''}`} onClick={() => setExpanded(false)}/>
      </header>
      <div>{children}</div>
    </ThemeProvider>
  )
}
