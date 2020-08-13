import * as React from "react"
import { useOutsideFocus } from "../../hooks/use-outside-focus"
import { graphql, Link, useStaticQuery } from "gatsby"
import Ink from "react-ink"
import {
  BothHeader,
  DesktopHeader,
  HeaderLink,
  Hr,
  LinkContainer,
  LogoContainer,
  LogoImg,
  LogoText,
  MenuClose,
  MobileExpandedContainer,
  MobileHeader,
  PageTitle,
  Scrim,
} from "./header.styles"

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
      const escape = e => {
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
    <LinkContainer>
      <HeaderLink to="/">
        Home
        <Ink />
      </HeaderLink>
      <HeaderLink to="/contributions">
        Contributions
        <Ink />
      </HeaderLink>
      <HeaderLink to="/blog" partiallyActive={true}>
        Blog
        <Ink />
      </HeaderLink>
    </LinkContainer>
  )

  return (
    <BothHeader ref={headerRef}>
      <DesktopHeader>
        <LogoContainer to="/">
          <LogoImg
            height="48"
            width="48"
            src={data.file.childImageSharp.fixed.src}
            alt=""
          />
          <LogoText>OceanBit</LogoText>
        </LogoContainer>
        <Hr />
        {links}
      </DesktopHeader>
      <MobileHeader>
        <MenuClose
          aria-label={
            expanded ? "Close the navigation menu" : "Open the navigation menu"
          }
          onClick={() => setExpanded(v => !v)}
          aria-controls="mobileDropdownContents"
          aria-expanded={expanded}
          ref={toggleRef}
          expanded={expanded}
        />
        <PageTitle>{title}</PageTitle>
        <Link to={"/"} aria-label={"Home"}>
          <img
            height="36"
            width="36"
            src={data.file.childImageSharp.fixed.src}
            alt=""
          />
        </Link>
      </MobileHeader>
      <MobileExpandedContainer
        id="mobileDropdownContents"
        style={{ top: expanded ? "100%" : "-100vh" }}
      >
        {links}
      </MobileExpandedContainer>
      <Scrim activeScrim={expanded} onClick={() => setExpanded(false)} />
    </BothHeader>
  )
}
