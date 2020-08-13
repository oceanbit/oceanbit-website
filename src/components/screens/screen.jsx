import * as React from "react"
import { ScreenContainer, ScreenImg } from "./screen.styles"

/**
 * @param {string} imageUrl
 */
export const Screen = ({ imageUrl, className = "" }) => {
  return (
    <ScreenContainer className={className}>
      {!!imageUrl && (
        <ScreenImg style={{ backgroundImage: `url('${imageUrl}')` }} />
      )}
    </ScreenContainer>
  )
}
