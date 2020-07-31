import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { ThemeProvider } from "../../constants/theme-context"
import { ButtonBase } from "@material-ui/core"
import { useOutsideFocus } from "../../hooks/use-outside-focus"
import { useEffect } from "react"

import layoutStyles from "./layout.module.scss"
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

  const headerRef = React.useRef();
  const toggleRef = React.useRef();

  useOutsideFocus(headerRef, expanded, () => setExpanded(false))

  React.useEffect(() => {
    if (!expanded) {
      toggleRef.current.focus();
    }
  }, [expanded, toggleRef])

  /**
   * Add escape key listener
   */
  useEffect(() => {
    if (expanded) {
      const escape = (e) => {
        if (e.keyCode === 27) {
          setExpanded(false);
        }
      }
      document.addEventListener('keydown', escape);

      return () => {
        document.removeEventListener('keydown', escape);
      };
    }
  }, [expanded]);

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
        ref={headerRef}
        className={layoutStyles.bothHeader}
      >
        <div className={layoutStyles.desktopHeader}>
          <a href="/" className={layoutStyles.logoContainer}>
            <img
              height="48"
              width="48"
              className={layoutStyles.logoImg}
              src={data.file.childImageSharp.fixed.src}
              alt=""
            />
            <span className={layoutStyles.logoText}>OceanBit</span>
          </a>
          <hr className={layoutStyles.hr} />
          {links}
        </div>
        <div className={layoutStyles.mobileHeader}>
          <button
            aria-label={expanded ? 'Close the navigation menu' : 'Open the navigation menu'}
            onClick={() => setExpanded(v => !v)}
            aria-controls="mobileDropdownContents" aria-expanded={expanded}
            style={{ background: "blue", width: "24px", height: "24px" }}
            ref={toggleRef}
          />
          <h1 className={layoutStyles.pageTitle}>{title}</h1>
          <img
            height="36"
            width="36"
            src={data.file.childImageSharp.fixed.src}
            alt=""
          />
        </div>
        <div
          id="mobileDropdownContents"
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
