import styled from "styled-components"
import {
  body_02,
  callout_01,
  headline_02,
  headline_02_mobile,
  headline_04,
  headline_04_mobile,
  overline_01,
} from "../../styles/font-styles"
import { forDesktop } from "../../styles/utils"
import { desktopTop, mobileTop } from "../../styles/vars"

export const Header = styled.h1`
  ${headline_02_mobile}
  margin-top: ${mobileTop};
  margin-bottom: 24px;
  color: var(--label_high_emphasis);

  ${forDesktop(`
    ${headline_02}
    margin-top: ${desktopTop};
    margin-bottom: 48px;
  `)}
`

export const CardList = styled.ul`
  display: grid;
  grid-gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
  grid-template-columns: 1fr;

  ${forDesktop(`
    grid-template-columns: 1fr 1fr;
  `)}
`

export const Card = styled.li`
  padding: 32px 24px 24px;
  border-radius: 8px;
  border: 1px solid var(--tint_on_surface_01);
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.h4`
  ${headline_04_mobile}
  margin-top: 8px;
  color: var(--label_high_emphasis);

  ${forDesktop(`
    ${headline_04}
    margin-top: 8px;
  `)}
`

export const CardType = styled.p`
  ${overline_01}
  order: -1;
  text-transform: uppercase;
  color: var(--label_medium_emphasis);
`

export const CardDesc = styled.p`
  ${body_02}
  margin-top: 4px;
  margin-bottom: 16px;
  color: var(--label_medium_emphasis);
`

export const CardLink = styled.a`
  ${callout_01}
  text-decoration: none;
  color: var(--primary);
  padding: 8px;
  margin-left: -8px;
  border-radius: 8px;
  position: relative;
`
