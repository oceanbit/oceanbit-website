import React from "react"
import {Layout} from '../components/layout';
import styles from "./contributions.module.scss"

const ContributionsPage = () => {
  return (
    <Layout title="Contributions">
      <div className="mainContents">
        <h1 className={styles.header}>Open-source libraries</h1>
      </div>
    </Layout>
  )
}

export default ContributionsPage
