import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Theme from '../../Theme'

export const Deck = styled.div`
  position: relative;
  width: 100%;
  display: block;
`

export const CategoriesNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a {
    display: inline-block;
    font-size: 18px;
    margin: 6px 10px;
    padding: 2px 5px;
    cursor: pointer;

    &.active {
      background-color: ${Theme.colors.default.base};
      color: #fff;
      border-radius: 4px;
    }
    
    &:hover,
    &:focus {
      background-color: ${Theme.colors.default.base};
      color: #fff;
      border-radius: 4px;
    }
  }
`

export const AppHeader = styled.header`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
`

export const AppHeading = styled.h1`
  text-align: center;
  font-weight: 900;
  line-height: 1em;
  margin: 0 auto;
  padding: 20px 0 60px;
  text-transform: uppercase;
  font-family: ${Theme.fonts.accent.family};
  line-height: 1.25;
  letter-spacing: 2px;
  width: 100%;

  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    font-size: 35px !important;
    width: 100%;
  }

  @media screen and (max-width: ${Theme.breakpoints.max.lg}) {
    font-size: 50px !important;
    width: 100%;
  }

  @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
    font-size: 65px;
  }
`