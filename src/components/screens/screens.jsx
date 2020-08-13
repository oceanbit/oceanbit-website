import * as React from "react"
import { ThemeContext } from "../../constants/theme-context"
import { MainContainer, Row, ScreenItem } from "./screens.styles"

export const Screens = () => {

  const {colorMode} = React.useContext(ThemeContext);

  const isDark = colorMode === 'dark';

  const brach_dark = isDark ? '/screenshots/brach_dark.png' : '/screenshots/branch_light.png'
  const commit_dark = isDark ? '/screenshots/commit_dark.png' : '/screenshots/commit_light.png'
  const history_dark = isDark ? '/screenshots/history_dark.png' : '/screenshots/history_light.png'
  const repo_list_dark = isDark ? '/screenshots/repo_list_dark.png' : '/screenshots/repo_list_light.png'

  return (
    <MainContainer>
      <Row>
        <ScreenItem imageUrl={brach_dark}/>
        <ScreenItem imageUrl={history_dark}/>
      </Row>
      <Row>
        <ScreenItem imageUrl={commit_dark}/>
        <ScreenItem imageUrl={repo_list_dark}/>
        <ScreenItem imageUrl={brach_dark}/>
      </Row>

      <Row>
        <ScreenItem imageUrl={history_dark}/>
        <ScreenItem imageUrl={brach_dark}/>
        <ScreenItem imageUrl={commit_dark}/>
        <ScreenItem imageUrl={repo_list_dark}/>
      </Row>

      <Row>
        <ScreenItem imageUrl={repo_list_dark}/>
        <ScreenItem imageUrl={commit_dark}/>
        <ScreenItem imageUrl={history_dark}/>
      </Row>
    </MainContainer>
  )
}
