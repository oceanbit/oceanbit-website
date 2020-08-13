import styled from "styled-components"
import { forDesktop, from } from "../../styles/utils"
import { Screen } from "./screen"

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(20deg);

  opacity: 0.3;
  margin-top: 70%;
  transform-origin: right;
  filter: none;

  ${from(
    "650px",
    `
    margin-top: 40%;
    transform: rotate(20deg) scale(0.6);
  `
  )}

  ${from(
    "1450px",
    `
    transform-origin: center;
    transform: rotate(20deg);
    opacity: 1;
    margin-top: 40%;
    filter: drop-shadow(0 24px 24px rgba(0,0,0,0.16));
  `
  )}

  ${from(
    "1800px",
    `
    margin-top: 20%;
  `
  )}

  ${from(
    "2200px",
    `
    margin-top: 10%;
  `
  )}

  ${from(
    "3400px",
    `
    margin-top: 0%;
  `
  )}
`

export const Row = styled.div`
  width: 25%;
  max-width: 240px;
  height: fit-content;

  &:not(:first-child) {
    margin-left: 10px;

    ${forDesktop(`
      margin-left: 20px;
    `)}
  }
`

export const ScreenItem = styled(Screen)`
  &:not(:first-child) {
    margin-top: 10px;

    ${forDesktop(`
      margin-top: 20px;
    `)}
  }
`
