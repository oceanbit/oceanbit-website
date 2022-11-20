import * as React from "react"
import { ThemeProvider } from "../../constants/theme-context"
import { Footer } from "../footer"
import { Header } from "../header"
import layoutStyles from "./layout.module.scss"
import "../../global.scss"

export const Layout = ({ children, title, waveFooter = true }) => {

  return (
    <ThemeProvider>
      <div className={layoutStyles.parentContainer}>
        <Header title={title}/>
        <main className={layoutStyles.contentContain}>{children}</main>
        <Footer waveFooter={waveFooter}/>
      </div>
    </ThemeProvider>
  )
}
