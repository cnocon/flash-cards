import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Theme from '../../Theme'
export const Deck = styled.div`
  position: relative;
  width: 100%;
  display: block;
  top: 45%;
  
  @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
    top: 35%;
  }
  
  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    top: 50%;
  }
`