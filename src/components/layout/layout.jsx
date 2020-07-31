import * as React from "react"
import { ThemeProvider } from "../../constants/theme-context"
import { Footer } from "../footer"
import { Header } from "../header"
import layoutStyles from "./layout.module.scss"
import "../../global.scss"

export const Layout = ({ children, title }) => {

  return (
    <ThemeProvider>
      <Header title={title}/>
      <div>{children}</div>
      <Footer/>
    </ThemeProvider>
  )
}
