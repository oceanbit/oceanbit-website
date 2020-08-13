import styled from "styled-components"
import { forDesktop } from "../../styles/utils"

export const ScreenContainer = styled.div`
  max-height: 440px;
  max-width: 240px;
  position: relative;
  border-radius: 20px;
  background: var(--base);
  // This fixed Safari's out-of-bounds
  // https://stackoverflow.com/questions/44948735/overflow-hidden-is-not-working-with-absolute-element-in-safari
  -webkit-transform: translateZ(0);

  overflow: hidden;
  border: 8px #8ab0fc solid;

  ${forDesktop(`
    border-radius: 40px;
  `)}

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ${(11 / 6) * 100}%;
  }
`

export const ScreenImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: top center;
`
