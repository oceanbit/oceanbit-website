import styled, { css, keyframes } from "styled-components"
import { forDesktop, forMobile } from "../../styles/utils"
import {
  desktopPadding,
  maxContentWidth,
  mobilePadding,
} from "../../styles/vars"
import { callout_01, headline_06 } from "../../styles/font-styles"
import { Link } from "gatsby"

export const BothHeader = styled.header`
  box-shadow: 0 1px var(--on_surface_01);
  position: relative;
`

export const DesktopHeader = styled.div`
  align-items: center;
  margin: 0 auto;
  max-width: ${maxContentWidth};
  padding: 20px ${desktopPadding};
  display: none;

  ${forDesktop(css`
    display: flex;
  `)}
`

export const MobileHeader = styled.div`
  display: flex;
  padding: ${mobilePadding};
  align-items: center;
  background: var(--base);
  position: relative;
  z-index: 4;

  ${forDesktop(css`
    display: none;
  `)}
`

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 24px;
`

export const LogoImg = styled.img`
  margin-right: 8px;
`

export const LogoText = styled.span`
  ${headline_06}
  color: var(--highEmphasis);
`

export const Hr = styled.hr`
  width: 1px;
  background: var(--lowEmphasis);
  height: 48px;
  display: block;
  margin: 0;
  border: none;
  outline: none;
`

export const LinkContainer = styled.nav`
  display: flex;
  flex-direction: column;

  ${forDesktop(css`
    flex-direction: row;
  `)}
`

export const PageTitle = styled.h1`
  ${headline_06}
  color: var(--mediumEmphasis);
  margin-left: 24px;
  margin-right: auto;
`

const activeClassName = "active"

export const HeaderLink = styled(Link).attrs({
  activeClassName: activeClassName,
})`
  ${callout_01}
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  color: var(--highEmphasis);
  text-decoration: none;
  align-items: center;

  position: relative;
  border-radius: 8px;
  justify-content: flex-start;

  ${forDesktop(css`
    margin-left: 24px;
    justify-content: center;
  `)}
  
  ${forMobile(css`
    width: calc(100% - 32px);
    text-align: left;
  `)}
  
  &.${activeClassName} {
    ${headline_06}
    color: var(--primary);
  }
`

export const MobileExpandedContainer = styled.div`
  z-index: 3;
  position: absolute;
  transition: top 300ms ease-in-out;
  background: var(--base);
  width: calc(100% - ${mobilePadding} * 2);
  padding: ${mobilePadding};

  ${forDesktop(css`
    display: none;
  `)}
`

export const Scrim = styled.div`
  position: fixed;
  z-index: -1;
  background: var(--lowEmphasis);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  ${props =>
    props.activeScrim &&
    css`
      opacity: 1;
      z-index: 2;
    `}

  ${forDesktop(css`
    display: none;
  `)}
`

const toClose = keyframes`
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -576px 0px;
  }
`

const toMenu = keyframes`
  0% {
    background-position: -576px 0px;
  }

  100% {
    background-position: 0px 0px;
  }
`

export const MenuClose = styled.button`
  animation-duration: 400ms;
  animation-timing-function: steps(24);
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  animation-fill-mode: forwards;
  background-image: url("/menu_close.svg");
  background-position: center center;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;

  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }

  @media (prefers-reduced-motion) {
    animation-duration: 0ms;
  }

  ${props =>
    props.expanded
      ? css`
          animation-name: ${toClose};
        `
      : css`
          animation-name: ${toMenu};
        `}
`
