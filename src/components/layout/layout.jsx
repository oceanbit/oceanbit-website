import * as React from "react"
import { ThemeProvider } from "../../constants/theme-context"
import { Footer } from "../footer"
import { Header } from "../header"

import { GlobalStyle } from "./global"

import { ContentContain, ParentContainer } from "./layout.styles"

export const Layout = ({ children, title, waveFooter = true }) => {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider>
        <ParentContainer>
          <Header title={title}/>
          <ContentContain>{children}</ContentContain>
          <Footer waveFooter={waveFooter}/>
        </ParentContainer>
      </ThemeProvider>
    </>
  )
}
