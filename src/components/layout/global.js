import { createGlobalStyle } from "styled-components"

import { desktopPadding, desktopTop, maxContentWidth, mobilePadding, mobileTop } from "../../styles/vars"
import { forDesktop, from } from "../../styles/utils"

import epilogue from "../../assets/fonts/epilogue.ttf"
import epilogueItalics from "../../assets/fonts/epilogue_italic.ttf"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Epilogue';
    src: url(${epilogue}) format('truetype');
  }
  
  @font-face {
   font-family: 'Epilogue';
   src: url(${epilogueItalics}) format('truetype');
   font-style: italic;
  }
  
  :root {
    font-size: 1rem;
  }
  
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: var(--base);
  }
  
  a {
    color: var(--primary);
  }
  
  i {
    font-style: italic;
  }
  
  .mainContents {
    padding-left: ${mobilePadding};
    padding-right: ${mobilePadding};
  
    ${forDesktop(`
      max-width: ${maxContentWidth};
      margin: 0 auto;
      padding-left: ${desktopPadding};
      padding-right: ${desktopPadding};
    `)}
  }
  
  .topContents {
    margin-top: ${mobileTop};
  
    ${forDesktop(`
      margin-top: ${desktopTop};
    `)}
  }
  
  .waveSvg {
    width: 100%;
    position: absolute;
    transition: transform 500ms ease-in-out;
  
    ${from("1130px", `
      transform: scaleY(0.7);
    `)}
  
    ${from("1650px", `
      transform: scaleY(0.5);
    `)}
  
  
    ${from("2400px", `
      transform: scaleY(0.3);
    `)}
  }
`
