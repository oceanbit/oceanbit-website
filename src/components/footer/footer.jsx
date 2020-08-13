import * as React from "react"

import { useWave } from "../wave"

import { Contents, EmailIcon, FindUs, GitHubIcon, LinkText, MainBG, TopContainer, TwitterIcon } from "./footer.styles"

export const Footer = ({ waveFooter }) => {
  const { wave, waveHeight, marginTopBelow } = useWave("var(--primary)", "top")

  const contents = (
    <Contents>
      <FindUs>Find us</FindUs>
      <LinkText href="https://twitter.com/oceanbit_dev">
        <TwitterIcon/>
        oceanbit_dev
      </LinkText>
      <LinkText href="mailto:contact@oceanbit.dev">
        <EmailIcon/>
        contact@oceanbit.dev
      </LinkText>
      <LinkText href="https://github.com/oceanbit-dev">
        <GitHubIcon/>
        oceanbit-dev
      </LinkText>
    </Contents>
  )

  return (
    <TopContainer>
      {waveFooter && <>
        {wave}
        <div style={{ paddingTop: waveFooter ? waveHeight : 0 }}/>
      </>}
      <MainBG>
        <div className="mainContents" style={{position: 'relative', marginTop: waveFooter ? marginTopBelow : 0}}>
          {contents}
        </div>
      </MainBG>
    </TopContainer>
  )
}
