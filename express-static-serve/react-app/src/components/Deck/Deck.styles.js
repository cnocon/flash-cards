import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Theme from '../../Theme'

export const Deck = styled.div`
  position: static;
  width: 100%;
  display: block;
  /* position: absolute; */
  top: 50%;
  left: 0;
  height: calc(100% - 180px);

  .fa-spin {
    margin: 25vh auto 25vh;
    color: ${Theme.colors.default.darkest};
    text-align: center;
    display: block;
  }
`

export const CategoriesNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  button {
    background-color: transparent;
    outline: 0;
    display: inline-block;
    font-size: 15px;
    margin: 6px 5px;
    padding: 2px 5px;
    color: ${Theme.colors.default.base};
    cursor: pointer;
    border: 0;
    transition: transform .4s;
    /* border: 2px solid ${Theme.colors.default.darkest}; */
    /* border-radius: 4px; */
    
    &:hover,
    &:focus {
      background-color: ${Theme.colors.default.base};
      color: #fff;
      border-radius: 4px;
      outline: 0;
    }

    &.active {
      background-color: ${Theme.colors.default.base};
      color: #fff;
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

export const Header = styled.header`
  position: relative;
`