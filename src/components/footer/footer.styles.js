import styled, { css } from "styled-components"
import { callout_01, headline_02, headline_02_mobile } from "../../styles/font-styles"
import { forDesktop } from "../../styles/utils"

import TwitterIconBase from "../../assets/twitter.svg"
import GitHubIconBase from "../../assets/github.svg"
import EmailIconBase from "../../assets/email.svg"

export const TopContainer = styled.div`
  margin-top: 4rem;
  position: relative;
`

export const MainBG = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: var(--primary);
`

export const Contents = styled.div`
  color: var(--base);
  display: flex;
  flex-direction: column;
`

export const FindUs = styled.h3`
  ${headline_02_mobile}
  margin-bottom: 24px;

  ${forDesktop(`
    ${headline_02}
    margin-bottom: 24px;
  `)}
`

const Icon = css`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 16px;
`

export const TwitterIcon = styled(TwitterIconBase)`
  ${Icon}
`;

export const EmailIcon = styled(EmailIconBase)`
  ${Icon}
`;

export const GitHubIcon = styled(GitHubIconBase)`
  ${Icon}
`;

export const LinkText = styled.a`
  color: var(--base);
  text-decoration: none;
  ${callout_01}
  display: flex;
  align-items: center;
  
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`
