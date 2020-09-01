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
    font-size: 16px;
    margin: 6px 10px;
    padding: 2px 5px;
    color: ${Theme.colors.default.base};
    cursor: pointer;
    transition: transform .4s;
    border: 2px solid ${Theme.colors.default.darkest};
    border-radius: 4px;
    
    &:hover,
    &:focus {
      background-color: ${Theme.colors.default.darkest};
      transform: scale(1.1);
      color: #fff;
      border-radius: 4px;
    }

    &.active {
      transform: scale(1.2) translateY(-1px);
      background-color: ${Theme.colors.default.darkest};
      color: #345;
      border-radius: 4px;

      &.white {
        color: #fff;
      }

      &.blue {
        color: ${Theme.colors.accents.vivid.blue};
      }

      &.red {
        color: ${Theme.colors.accents.vivid.red};
      }
    
      &.green {
        color: ${Theme.colors.accents.green};
      }
    
      &.yellow {
        color: ${Theme.colors.accents.yellow};
      }
    
      &.purple {
        color: ${Theme.colors.accents.purple};
      }

      &.royal-blue {
        color: ${Theme.colors.accents.royalBlue};
      }
    
      &.orange {
        color: ${Theme.colors.accents.orange};
      }
    }
  }
`

export const AppHeader = styled.header`
  position: relative;
`

export const AppHeading = styled.h1`
  text-align: center;
  font-weight: 900;
  line-height: 1em;
  margin-bottom: 0;
  padding-bottom: 30px;
  text-transform: uppercase;
  font-family: ${Theme.fonts.accent.family};
  font-size: 80px;
  line-height: 1.25;
  letter-spacing: 1px;
  width: 100%;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: 45px !important;
    width: 100%;
  }

  @media screen and (max-width: ${Theme.breakpoints.max.lg}) {
    font-size: 70px !important;
    width: 100%;
  }
`