import styled from "@emotion/styled";
// import { css } from "@emotion/core";
import Theme from '../../Theme'

export const Deck = styled.div`
  position: relative;
  display: block;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  max-height: 600px;
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
  padding: 60px 0 0;
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

export const CategoriesNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* padding: 0 0 60px; */
  justify-content: center;
  position: absolute;
  bottom: 20vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}

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


export const Lightbox = styled.div`
  .overlay {
    display: block;
    position: absolute;
    top: calc(50% + 80px);
    left: 50%;
    content: '';
    width: 100vw;
    height: 100vh;
    z-index: 1;
    transform: translate(-50%,-50%);
    background-color: hsl(0deg 0% 0% / 88%);

    @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
      top: 0;
      left: 0;
      transform: none; 
    }
  }

  .lightbox {  
    display: block;
    position: absolute;
    z-index: 9999999;
    overflow: auto;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    @media screen and (max-width: ${Theme.breakpoints.max.lg}) {
      /* Always show scrollbars */
      &::-webkit-scrollbar {-webkit-appearance: none;}
      &::-webkit-scrollbar:vertical {width: 11px;}
      &::-webkit-scrollbar:horizontal {height: 11px;}
      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid rgba(0, 0, 0, .5);
        background-color: ${Theme.colors.accents.vivid.purple};
      }
    }


    img {
      position: absolute;
      z-index: 99999;
      top: 50%;
      left: 0;
      max-width: 800px;
      height: auto;
      min-width: 100%;
      display: block;
      transform: translateY(calc(-50% + 80px));
      cursor: pointer;
    }
  }
`