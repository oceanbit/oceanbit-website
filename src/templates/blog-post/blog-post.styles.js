import styled from 'styled-components';
import { forDesktop, from } from "../../styles/utils"
import { mobilePadding, mobileTop } from "../../styles/vars"
import {
  body_01, caption_01, headline_01, headline_01_mobile,
  headline_02,
  headline_02_mobile,
  headline_03,
  headline_03_mobile,
  headline_04,
  headline_04_mobile, headline_05, headline_05_mobile, headline_06, overline_01
} from "../../styles/font-styles"

export const PostContainer = styled.div`
  list-style: none;
  padding-left: ${mobilePadding};
  padding-right: ${mobilePadding};
  margin-top: ${mobileTop};

  ${from('800px', `
    max-width: $maxContentWidth;
    margin: 0 auto;
    margin-top: $desktopTop;
    padding-left: $desktopPadding;
    padding-right: $desktopPadding;
  `)}

  position: relative;
  text-decoration: none;
  color: var(--highEmphasis);
`

export const PostContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 32px;

  ${from('800px', `
    margin-left: 160px;
    margin-right: 160px;
    padding-top: 56px;
    padding-bottom: 56px;
  `)}

  color: var(--highEmpasis);

  // We should not have H1 in blog posts

  h2 {
    ${headline_02_mobile}
    margin: 1rem 0;
  
    ${forDesktop(`
      ${headline_02}
      margin: 1rem 0;
    `)}
  }

  h3 {
    ${headline_03_mobile}
    margin: 1rem 0;

    ${forDesktop(`
      ${headline_03}
      margin: 1rem 0;
    `)}
  }

  h4 {
    ${headline_04_mobile}
    margin: 1rem 0;


    ${forDesktop(`
      ${headline_04}
      margin: 1rem 0;
    `)}
  }

  h5 {
    ${headline_05_mobile}
    margin: 1rem 0;


    ${forDesktop(`
      ${headline_05}
      margin: 1rem 0;
    `)}
  }

  h6 {
    ${headline_06}
  }

  p {
    ${body_01}
    margin: 1rem 0;
  }

  blockquote {
    position: relative;
    margin-left: 1em;
    color: var(--mediumEmphasis);

    &::before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: var(--primary);
      left: -1em;
    }

  }
`

export const PostTitle = styled.h2`
  ${headline_01_mobile}

  ${from('800px', `
    ${headline_01}
  `)}
`

export const Date = styled.p`
  ${caption_01}
  order: -1;
  color: var(--mediumEmphasis);
  margin-bottom: 8px;

  > br {
    display: none;
  }

  ${from('800px', `
    color: var(--highEmphasis);
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
  ${from('800px', `
    ${headline_05}
  `)}
`
