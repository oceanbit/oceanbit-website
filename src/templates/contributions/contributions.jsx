import React from "react"
import { Layout } from "../../components/layout"
import SEO from "../../components/seo"
import Ink from "react-ink"
import { Card, CardDesc, CardLink, CardList, CardTitle, CardType, Header } from "./contributions.styles"

const oss_libraries = [
  {
    type: "React Native",
    name: "Immersive bars",
    description: "Allows apps to draw their content behind transparent system bars on Android",
    github: "https://github.com/oceanbit-dev/react-native-immersive-bars"
  },
  {
    type: "React Native",
    name: "Button Toggle Group",
    description: "An animated button toggle group for React Native",
    github: "https://github.com/oceanbit-dev/react-native-button-toggle-group"
  },
  {
    type: "React Native",
    name: "Directory picker",
    description: "Allows apps to access Android and iOS’ file pickers",
    github: "https://github.com/oceanbit-dev/react-native-directory-picker"
  }
  // {
  //   type: "React Native, Web",
  //   name: "Seaside",
  //   description: "Our open-source design system",
  //   github: "https://github.com/oceanbit-dev/seaside"
  // }
]

const weSponsor = [
  {
    type: "JavaScript",
    name: "Isomorphic Git",
    description: "A pure JavaScript implementation of git for node and browsers!",
    github: "https://github.com/isomorphic-git/isomorphic-git"
  }
]

const weContribute = [
  {
    type: "JavaScript",
    name: "Isomorphic Git",
    description: "A pure JavaScript implementation of git for node and browsers!",
    github: "https://github.com/isomorphic-git/isomorphic-git"
  }
]

const ContributionsTemplate = () => {
  return (
    <Layout title="Contributions">
      <SEO
        title={"Contributions"}
        description={"We at OceanBit do our best to give back to the community. Whether it be new open projects, code contributions, or community funding, we do our best to improve the development ecosystem."}
        meta={[
          {
            property: `og:type`,
            content: `website`
          }
        ]}
      />
      <div className="mainContents">
        <Header id="ossLibHead">Open-source libraries</Header>
        <CardList aria-describedby="ossLibHead">
          {
            oss_libraries.map(lib => (
              <Card key={lib.name}>
                <CardTitle>{lib.name}</CardTitle>
                <CardType>{lib.type}</CardType>
                <CardDesc>{lib.description}</CardDesc>
                <CardLink href={lib.github}>View on GitHub
                  <Ink/></CardLink>
              </Card>
            ))
          }
        </CardList>
        <Header id="weContribToHead">We contribute to</Header>
        <CardList aria-describedby="weContribToHead">
          {
            weContribute.map(lib => (
              <Card key={lib.name}>
                <CardTitle>{lib.name}</CardTitle>
                <CardType>{lib.type}</CardType>
                <CardDesc>{lib.description}</CardDesc>
                <CardLink href={lib.github}>View on GitHub
                  <Ink/></CardLink>
              </Card>
            ))
          }
        </CardList>
        <Header id="weSponsorHead">We sponsor</Header>
        <CardList aria-describedby="weSponsorHead">
          {
            weSponsor.map(lib => (
              <Card key={lib.name}>
                <CardTitle>{lib.name}</CardTitle>
                <CardType>{lib.type}</CardType>
                <CardDesc>{lib.description}</CardDesc>
                <CardLink href={lib.github}>View on GitHub
                  <Ink/></CardLink>
              </Card>
            ))
          }
        </CardList>
      </div>
    </Layout>
  )
}

export default ContributionsTemplate
