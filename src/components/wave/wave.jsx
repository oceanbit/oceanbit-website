import * as React from "react"
import { useDimensions } from "../../hooks/use-dimention"
import { useMedia } from "../../hooks/use-media"

/**
 * @param {string} color - the CSS color for the wave
 * @param {'top' | 'bottom'} position - Placement of the wave
 */
export const useWave = (color, position) => {
  const [waveRef, { height: waveHeight }] = useDimensions()

  const showTextUnder = useMedia(
    // This is where the text stops fitting under the waves realistically
    ["(min-width: 900px)", "(max-width: 900px)"],
    [false, true],
    false
  )

  const marginTopBelow = showTextUnder ? 0 : 0 - waveHeight / 3

  const wave = (
    <svg
      className="waveSvg"
      viewBox="0 0 1152 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={waveRef}
      style={
        position === "top"
          ? { top: "10px", transformOrigin: "top" }
          : { bottom: "-10px", transformOrigin: "bottom" }
      }
    >
      <path
        d="M328 5.24949C120.01 -26.8156 0 91.8827 0 255.749L1152 255.75V79.7495C1152 409.749 568 42.2495 328 5.24949Z"
        fill={color}
      />
    </svg>
  )

  return { wave, waveHeight, marginTopBelow }
}
