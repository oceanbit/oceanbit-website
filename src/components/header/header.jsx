import * as React from "react"
import { useOutsideFocus } from "../../hooks/use-outside-focus"
import { ButtonBase } from "@material-ui/core"
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from "./header.module.scss"

export const Header = ({ title }) => {
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

  const [expanded, setExpanded] = React.useState(false)

  const headerRef = React.useRef()
  const toggleRef = React.useRef()

  useOutsideFocus(headerRef, expanded, () => setExpanded(false))

  React.useEffect(() => {
    if (!expanded) {
      toggleRef.current.focus()
    }
  }, [expanded, toggleRef])

  /**
   * Add escape key listener
   */
  React.useEffect(() => {
    if (expanded) {
      const escape = (e) => {
        if (e.keyCode === 27) {
          setExpanded(false)
        }
      }
      document.addEventListener("keydown", escape)

      return () => {
        document.removeEventListener("keydown", escape)
      }
    }
  }, [expanded])

  const links = (
    <nav className={styles.linkContainer}>
      <ButtonBase className={styles.linkBase}>
        <Link
          to="/"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          Home
        </Link>
      </ButtonBase>
      <ButtonBase className={styles.linkBase}>
        <Link
          to="/contributions"
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          Contributions
        </Link>
      </ButtonBase>

      <ButtonBase className={styles.linkBase}>
        <Link
          to="/blog"
          partiallyActive={true}
          className={styles.headerLink}
          activeClassName={styles.activeLink}
        >
          Blog
        </Link>
      </ButtonBase>
    </nav>
  )

  return (
    <header
      ref={headerRef}
      className={styles.bothHeader}
    >
      <div className={styles.desktopHeader}>
        <Link to="/" className={styles.logoContainer}>
          <img
            height="48"
            width="48"
            className={styles.logoImg}
            src={data.file.childImageSharp.fixed.src}
            alt=""
          />
          <span className={styles.logoText}>OceanBit</span>
        </Link>
        <hr className={styles.hr}/>
        {links}
      </div>
      <div className={styles.mobileHeader}>
        <button
          aria-label={expanded ? "Close the navigation menu" : "Open the navigation menu"}
          onClick={() => setExpanded(v => !v)}
          aria-controls="mobileDropdownContents" aria-expanded={expanded}
          style={{ background: "blue", width: "24px", height: "24px" }}
          ref={toggleRef}
        />
        <h1 className={styles.pageTitle}>{title}</h1>
        <Link to={"/"} aria-label={"Home"}>
          <img
            height="36"
            width="36"
            src={data.file.childImageSharp.fixed.src}
            alt=""
          />
        </Link>
      </div>
      <div
        id="mobileDropdownContents"
        className={styles.mobileExpandedContainer}
        style={{ top: expanded ? "100%" : "-100vh" }}
      >
        {links}
      </div>
      <div className={`${styles.scrim} ${expanded ? styles.activeScrim : ""}`} onClick={() => setExpanded(false)}/>
    </header>
  )
}
