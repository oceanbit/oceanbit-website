import styled, { css } from "styled-components"
import { forDesktop } from "../../styles/utils"
import { desktopPadding, maxContentWidth, mobilePadding } from "../../styles/vars"
import { body_01, callout_01, headline_02, headline_02_mobile } from "../../styles/font-styles"
import { Link } from "gatsby"

export const RelativeContainer = styled.div`
  position: relative;
`

export const HeadingContainer = styled.div`
  background: var(--primary);
  overflow: hidden;
  position: relative;
`

export const HeadingContents = styled.div`
  padding-bottom: 50px;
  max-width: ${maxContentWidth};
  margin: 0 auto;
  padding-left: ${mobilePadding};
  padding-right: ${mobilePadding};

  ${forDesktop(`
    padding-bottom: 240px;
    padding-left: ${desktopPadding};
    padding-right: ${desktopPadding};
  `)}
`

export const HeadingBodyContainer = styled.div`
  max-width: 456px;

  margin-top: 24px;
  position: relative;
  z-index: 1;

  ${forDesktop(`
    margin-top: 96px;
  `)}
`

export const HeadingTitle = styled.p`
  ${headline_02_mobile}
  color: var(--base);

  ${forDesktop(`
    ${headline_02}
  `)}
`

export const HeadingBody = styled.p`
  ${body_01}
  color: var(--base);
  margin-top: 8px;
  margin-bottom: 24px;
`

const MainButton = css`
  ${callout_01}
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 8px;
  border: none;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  border-radius: 8px !important;
  overflow: hidden;
  position: relative;

  > svg {
    margin-left: 4px;
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const MeetButton = styled.a`
  ${MainButton}  
  color: var(--primary);
  background: var(--base);
`

export const ContributionsButton = styled(Link)`
  ${MainButton}
  color: var(--base);
  background: var(--primary);
`

export const MainContents = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 10rem;
`

export const ContributingHeader = styled.h3`
  ${headline_02_mobile}
  color: var(--highEmphasis);

  ${forDesktop(`
    ${headline_02}
  `)}
`

export const ContributingBody = styled.p`
  ${body_01}
  color: var(--mediumEmphasis);
  margin-top: 8px;
  margin-bottom: 24px;
  max-width: 465px;
`
