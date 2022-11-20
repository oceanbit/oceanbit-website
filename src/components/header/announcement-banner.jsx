import * as React from "react"
import ChevronIcon from "../../assets/chevron.svg"
import { navigate } from "gatsby"
import styles from './announcement-banner.module.scss';

export const AnnouncementBanner = ({ text, bgUrl, href }) => {
  return <aside onClick={() => {
    navigate(href)
  }}
   className={styles.announcementContainer}
   style={{backgroundImage: bgUrl}}
   >
    {text}
    <button className={styles.learnMoreButton}>
      Learn more <ChevronIcon className={styles.learnMoreIcon} />
    </button>
  </aside>
}
