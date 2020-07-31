import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import styles from "./index.module.scss"
import { useDimensions } from "../hooks/use-dimention"
import { useMedia } from "../hooks/use-media"
import { Screens } from "../components/screens"
import { ButtonBase } from "@material-ui/core"
import ChevronIcon from '../assets/chevron.svg';

const IndexPage = () => {
  const [waveRef, { height: waveHeight }] = useDimensions()

  const showTextUnder = useMedia(
    // This is where the text stops fitting under the waves realistically
    ["(min-width: 900px)", "(max-width: 900px)"],
    [false, true],
    false
  )

  return (
    <Layout title="Home">
      <SEO/>
      <div className={styles.relativeContainer}>
        <div className={styles.headingContainer} style={{ paddingBottom: waveHeight }}>
          <div className={styles.headingContents}>
            <div className={styles.headingBodyContainer}>
              <p className={styles.headingTitle}>Surf through your repos, wherever you go</p>
              <p className={styles.headingBody}>Manage repositories, checkout branches, write and commit changes and
                much more, right from your mobile device</p>
              <ButtonBase>
                <button className={`${styles.meetButton} ${styles.mainButton}`}>Meet GitShark <ChevronIcon/></button>
              </ButtonBase>
            </div>
            <Screens/>
          </div>
        </div>
        <svg className={styles.waveSvg} viewBox="0 0 1152 256" fill="none" xmlns="http://www.w3.org/2000/svg"
             ref={waveRef}>
          <path
            d="M328 5.24949C120.01 -26.8156 0 91.8827 0 255.749L1152 255.75V79.7495C1152 409.749 568 42.2495 328 5.24949Z"
            fill="var(--base)"/>
        </svg>
      </div>
      <div className={styles.mainContents} style={{ marginTop: showTextUnder ? 0 : 0 - (waveHeight / 3) }}>
        <div className="mainContents">
          <div>
            <h3 className={styles.contributingHeader}>Contributing back</h3>
            <p className={styles.contributingBody}>At OceanBit we believe in open code, which is why we’re always happy
              to support open-source projects and share our own code as well</p>
            <button className={`${styles.contributionsButton} ${styles.mainButton}`}>OceanBit’s contributions <ChevronIcon/></button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
