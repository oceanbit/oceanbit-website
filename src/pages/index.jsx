import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import { Screens } from "../components/screens"
import ChevronIcon from "../assets/chevron.svg"
import { useWave } from "../components/wave"
import Ink from "react-ink"

import {
  ContributingBody,
  ContributingHeader,
  ContributionsButton,
  HeadingBody,
  HeadingBodyContainer,
  HeadingContainer,
  HeadingContents, HeadingTitle,
  MainContents, MeetButton,
  RelativeContainer
} from "./index.styles"

const IndexPage = () => {
  const { wave, waveHeight, marginTopBelow } = useWave("var(--base)", "bottom")

  return (
    <Layout title="Home" waveFooter={false}>
      <SEO meta={[
        {
          property: `og:type`,
          content: `website`
        }
      ]}/>
      <RelativeContainer>
        <HeadingContainer style={{ paddingBottom: waveHeight }}>
          <HeadingContents>
            <HeadingBodyContainer>
              <HeadingTitle>Surf through your repos, wherever you go</HeadingTitle>
              <HeadingBody>Manage repositories, checkout branches, write and commit changes and
                much more, right from your mobile device</HeadingBody>
              <MeetButton href={"https://gitshark.dev"}>Meet
                GitShark <ChevronIcon/>
                <Ink/>
              </MeetButton>
            </HeadingBodyContainer>
            <Screens/>
          </HeadingContents>
        </HeadingContainer>
        {wave}
      </RelativeContainer>
      <MainContents style={{ marginTop: marginTopBelow }}>
        <div className="mainContents">
          <div>
            <ContributingHeader>Contributing back</ContributingHeader>
            <ContributingBody>At OceanBit we believe in open code, which is why we’re always happy
              to support open-source projects and share our own code as well</ContributingBody>
            <ContributionsButton to={"/contributions"}>OceanBit’s
              contributions <ChevronIcon/>
              <Ink/>
            </ContributionsButton>
          </div>
        </div>
      </MainContents>
    </Layout>
  )
}

export default IndexPage
