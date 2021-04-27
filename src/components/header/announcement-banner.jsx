import * as React from "react"
import { AnnouncementContainer, LearnMoreButton, LearnMoreIcon } from "./announcement-banner.styles"
import { navigate } from "gatsby"

export const AnnouncementBanner = ({text, bgUrl, href}) => {
  return <AnnouncementContainer onClick={() => {
    navigate(href)
  }} bgUrl={bgUrl}>
    {text}
    <LearnMoreButton>
      Learn more <LearnMoreIcon/>
    </LearnMoreButton>
  </AnnouncementContainer>
}
