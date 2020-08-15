/**
 * Much of this code deals with dark mode. It's ripped straight from:
 * @see https://joshwcomeau.com/gatsby/dark-mode/
 *
 * Huge thanks to Josh for outlining how to do this
 */
import React from "react"
import Terser from "terser"

import {
  theme,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/constants"

/**
 * DARK MODE CODE
 *
 * Prevents the "flash" of light mode
 */
/**
 * Trust me, I know that it looks like we're reading entries from an emoji
 * but what's really happening is that this function is being converted to a
 * string, then mutated by "MagicScriptTag" in order to add in dynamic code
 * into that string. This way, we're able to avoid duplicating
 */
function setColorsByTheme() {
  const theme = "🌈"
  const colorModeCssProp = "⚡️"

  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const prefersDarkFromMQ = mql.matches

  let colorMode = "light"

  colorMode = prefersDarkFromMQ ? "dark" : "light"

  let root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode)

  const colors = theme[colorMode];
  Object.entries(colors).forEach(([name, color]) => {
    const cssVarName = `--${name}`

    root.style.setProperty(cssVarName, color)
  })
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace('"🌈"', JSON.stringify(theme))
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP)

  let calledFunction = `(${boundFn})()`

  calledFunction = Terser.minify(calledFunction).code

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  // Set the dark mode script
  setPreBodyComponents(<MagicScriptTag />)
}
