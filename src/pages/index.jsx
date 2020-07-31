import React from "react"
import SEO from "../components/seo"
import { Layout } from "../components/layout"
import styles from "./index.module.scss"
import { useDimensions } from "../hooks/use-dimention"

const IndexPage = () => {
  const [waveRef, {height: waveHeight}] = useDimensions()

  return (
    <Layout title="Home">
      <SEO/>
      <div className={styles.headingContainer} style={{paddingBottom: waveHeight}}>
        <div className={styles.headingContents}/>
        <svg className={styles.waveSvg} viewBox="0 0 1152 256" fill="none" xmlns="http://www.w3.org/2000/svg" ref={waveRef}>
          <path
            d="M328 5.24949C120.01 -26.8156 0 91.8827 0 255.749L1152 255.75V79.7495C1152 409.749 568 42.2495 328 5.24949Z"
            fill="var(--base)"/>
        </svg>
      </div>
      <h1>Home</h1>
    </Layout>
  )
}

export default IndexPage
