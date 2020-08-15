import styled from "styled-components"
import {
  body_01,
  callout_01,
  caption_01,
  headline_02,
  headline_02_mobile,
  headline_05,
  overline_01,
} from "../../styles/font-styles"
import { forDesktop, from } from "../../styles/utils"
import { Link } from "gatsby"
import {
  desktopPadding,
  desktopTop,
  maxContentWidth,
  mobilePadding,
  mobileTop,
} from "../../styles/vars"

export const PostList = styled.ul`
  list-style: none;
  padding-left: ${mobilePadding};
  padding-right: ${mobilePadding};
  margin-top: ${mobileTop};

  ${forDesktop(`
    max-width: ${maxContentWidth};
    margin: 0 auto;
    margin-top: ${desktopTop};
    padding-left: ${desktopPadding};
    padding-right: ${desktopPadding};
  `)}
`

export const PostContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 32px;

  ${forDesktop(`
    margin-left: 160px;
    margin-right: 160px;
    padding-top: 56px;
    padding-bottom: 56px;
  `)}
`

export const PostLinkCont = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--label_high_emphasis);

  &:not(:last-child) > ${PostContents} {
    border-bottom: 1px solid var(--tint_on_surface_01);
  }
`

export const PostTitle = styled.h2`
  ${headline_02_mobile}

  ${forDesktop(`
    ${headline_02}
  `)}
`

export const Date = styled.p`
  ${caption_01}
  order: -1;
  color: var(--label_medium_emphasis);
  margin-bottom: 8px;

  > br {
    display: none;
  }

  ${forDesktop(`
    color: var(--label_high_emphasis);
    order: 0;
    margin-bottom: 0px;
    position: absolute;
    top: 56px;
    left: 0;
    min-width: 120px;
    text-align: center;
    > br {
      display: initial;
    }
    ${overline_01}
    text-transform: uppercase;
  `)}
`

export const Day = styled.span`
  ${from(
    "800px",
    `
    ${headline_05}
  `
  )}
`

export const Excerpt = styled.p`
  ${body_01}
  color: var(--label_medium_emphasis);
  margin-bottom: 8px;
  margin-top: 8px;

  ${forDesktop(`
    margin-bottom: 16px;
    margin-top: 16px;
  `)}
`

export const ReadMore = styled.div`
  ${callout_01}
  padding: 8px !important;
  border-radius: 8px !important;
  margin-left: -8px !important;
  border: none;
  display: flex;
  align-items: center;
  color: var(--primary) !important;
  width: fit-content !important;
  position: relative;

  > svg {
    margin-left: 4px;
    height: 1.5rem;
    width: 1.5rem;
  }
`
