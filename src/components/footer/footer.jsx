import * as React from "react"
import TwitterIcon from "../../assets/twitter.svg"
import GitHubIcon from "../../assets/github.svg"
import EmailIcon from "../../assets/email.svg"
import styles from "./footer.module.scss"
import { useWave } from "../wave"

export const Footer = ({ waveFooter }) => {
  const { wave, waveHeight, marginTopBelow } = useWave("var(--primary)", "top")

  const contents = (
    <div className={styles.contents}>
      <h3 className={styles.findUs}>Find us</h3>
      <a href="https://twitter.com/oceanbit_dev" className={styles.linkText}>
        <TwitterIcon className={styles.icon}/>
        oceanbit_dev
      </a>
      <a href="mailto:contact@oceanbit.dev" className={styles.linkText}>
        <EmailIcon className={styles.icon}/>
        contact@oceanbit.dev
      </a>
      <a href="https://github.com/oceanbit-dev" className={styles.linkText}>
        <GitHubIcon className={styles.icon}/>
        oceanbit-dev
      </a>
    </div>
  )

  return (
    <div className={styles.topContainer}>
      {waveFooter && <>
        {wave}
        <div style={{ paddingTop: waveFooter ? waveHeight : 0 }}/>
      </>}
      <div className={styles.mainBG}>
        <div className="mainContents" style={{position: 'relative', marginTop: waveFooter ? marginTopBelow : 0}}>
          {contents}
        </div>
      </div>
    </div>
  )
}
