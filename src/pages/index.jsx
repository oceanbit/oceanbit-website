import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import styles from "./index.module.scss"
import { Screens } from "../components/screens"
import ChevronIcon from "../assets/chevron.svg"
import { useWave } from "../components/wave"
import { Link } from "gatsby"
import Ink from "react-ink"

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
      <div className={styles.relativeContainer}>
        <div className={styles.headingContainer} style={{ paddingBottom: waveHeight }}>
          <div className={styles.headingContents}>
            <div className={styles.headingBodyContainer}>
              <p className={styles.headingTitle}>Surf through your repos, wherever you go</p>
              <p className={styles.headingBody}>Manage repositories, checkout branches, write and commit changes and
                much more, right from your mobile device</p>
                <a className={`${styles.meetButton} ${styles.mainButton}`} href={"https://gitshark.dev"}>Meet
                  GitShark <ChevronIcon/>
                  <Ink/>
                </a>
            </div>
            <Screens/>
          </div>
        </div>
        {wave}
      </div>
      <div className={styles.mainContents} style={{ marginTop: marginTopBelow }}>
        <div className="mainContents">
          <div>
            <h3 className={styles.contributingHeader}>Contributing back</h3>
            <p className={styles.contributingBody}>At OceanBit we believe in open code, which is why we’re always happy
              to support open-source projects and share our own code as well</p>
              <Link to={"/contributions"} className={`${styles.contributionsButton} ${styles.mainButton}`}>OceanBit’s
                contributions <ChevronIcon/>
                <Ink/>
              </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
