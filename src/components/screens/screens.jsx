import * as React from "react"
import styles from "./screens.module.scss"
import { Screen } from "./screen"
import { ThemeContext } from "../../constants/theme-context"

export const Screens = () => {

  const {colorMode} = React.useContext(ThemeContext);

  const isDark = colorMode === 'dark';

  const brach_dark = isDark ? '/screenshots/brach_dark.png' : '/screenshots/branch_light.png'
  const commit_dark = isDark ? '/screenshots/commit_dark.png' : '/screenshots/commit_light.png'
  const history_dark = isDark ? '/screenshots/history_dark.png' : '/screenshots/history_light.png'
  const repo_list_dark = isDark ? '/screenshots/repo_list_dark.png' : '/screenshots/repo_list_light.png'

  return (
    <div className={styles.mainContainer}>
      <div className={styles.row}>
        <Screen imageUrl={brach_dark} className={styles.item}/>
        <Screen imageUrl={history_dark} className={styles.item}/>
      </div>
      <div className={styles.row}>
        <Screen imageUrl={commit_dark} className={styles.item}/>
        <Screen imageUrl={repo_list_dark} className={styles.item}/>
        <Screen imageUrl={brach_dark} className={styles.item}/>
      </div>

      <div className={styles.row}>
        <Screen imageUrl={history_dark} className={styles.item}/>
        <Screen imageUrl={brach_dark} className={styles.item}/>
        <Screen imageUrl={commit_dark} className={styles.item}/>
        <Screen imageUrl={repo_list_dark} className={styles.item}/>
      </div>

      <div className={styles.row}>
        <Screen imageUrl={repo_list_dark} className={styles.item}/>
        <Screen imageUrl={commit_dark} className={styles.item}/>
        <Screen imageUrl={history_dark} className={styles.item}/>
      </div>
    </div>
  )
}
