import * as React from "react"
import TwitterIcon from "../../assets/twitter.svg"
import GitHubIcon from "../../assets/github.svg"
import styles from "./footer.module.scss"

export const Footer = () => {
  const contents = (
    <div className={styles.contents}>
      <h3 className={styles.findUs}>Find us</h3>
      <a href="https://twitter.com/oceanbit_dev" className={styles.linkText}>
        <TwitterIcon className={styles.icon}/>
        oceanbit_dev
      </a>
      <a href="mailto:contact@oceanbit.dev" className={styles.linkText}>
        <TwitterIcon className={styles.icon}/>
        contact@oceanbit.dev
      </a>
      <a href="https://github.com/oceanbit-dev" className={styles.linkText}>
        <GitHubIcon className={styles.icon}/>
        oceanbit-dev
      </a>
    </div>
  )

  return (
    <div className={styles.mainBG}>
      <div className="mainContents">
        {contents}
      </div>
    </div>
  )
}
