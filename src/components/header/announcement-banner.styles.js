import styled from "styled-components"
import { caption_02, body_02 } from "../../styles/font-styles"
import ChevronIcon from "../../assets/chevron.svg"

export const AnnouncementContainer = styled.aside`
  ${body_02}
  display: flex;
  filter: drop-shadow(0px 1px 1px #1A42E6);
  color: white;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("${p => p.bgUrl}");
  justify-content: center;
  align-items: center;
  padding: 12px;
  cursor: pointer;
`

export const LearnMoreButton = styled.button`
  ${caption_02}
  display: flex;
  background: none;
  border: none;
  flex-wrap: nowrap;
  justify-content: center;
  color: inherit;
  margin-left: 8px;
  cursor: pointer;
`

export const LearnMoreIcon = styled(ChevronIcon)`
  height: 1rem;
  width: 1rem;
`
