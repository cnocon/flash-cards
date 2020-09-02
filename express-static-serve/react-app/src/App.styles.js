import styled from "@emotion/styled"
// import { css } from "@emotion/core"
import Theme from './Theme'

export const Layout = styled.div(
  ({theme}) => ({
    position: `relative`,
    padding: `0`,
    fontFamily: `${theme.fonts.body.family}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: '100%'
  })
)

export const Main = styled.main(
  ({theme}) => ({
    maxWidth: `${theme.layout.widths.lgMax}`,
    margin: '0 auto',
    height: '100%',
    width: '100%'
  })
)

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const MainNav = styled.ul`  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 450px;
  margin: 0 auto;
  padding: 20px 0 0;

  li {
    display: inline-block;
    list-style-type: none;
    margin: 0 10px 0 0;
    padding: 0;

    &:last-of-type {
      margin-right: 0;
      &::after { display: none; }
    }

    &::after {
      content: '|';
      display: inline-block;
      font-size: 18px;
      line-height: 14px;
      padding-left: 10px;
      /* color: ${Theme.colors.default.darkest}; */
      color: #fff;
    }
  }

  a {
    font-family: ${Theme.fonts.accent.family};
    /* font-weight: 700;
    color: ${Theme.colors.default.base}; */
    color: #fff;
    font-size: 12px;
    letter-spacing: .5px;
    display: inline;
    text-transform: uppercase;
    &:hover,
    &:focus {
      /* border-bottom: 1px solid ${Theme.colors.default.darkest}; */
      border-bottom: 1px solid #fff;
    }
  }
`

export const AppHeader = styled.header`
  position: relative;
  /* border-bottom: 2px solid ${Theme.colors.default.base}; */
  margin-bottom: 30px;
  /* background-color: ${Theme.colors.default.lightGray}; */
  background-color: ${Theme.colors.default.darkest};
  box-shadow: 0 1px 3px -1px rgba(0,0,0,0.3);
  background-size: 100% 3px;
  
  @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
    height: 180px;
  }
  
`

export const AppHeading = styled.h1`
  text-align: center;
  font-weight: 900;
  line-height: 1em;
  margin: 15px auto 0;
  padding-bottom: 30px;
  text-transform: uppercase;
  /* color: ${Theme.colors.default.darkest}; */
  color: #fff;
  font-family: ${Theme.fonts.accent.family};
  font-size: 80px;
  line-height: 1.25;
  letter-spacing: 1px;
  width: 100%;
  
  @media screen and (max-width: ${Theme.breakpoints.max.lg}) {
    font-size: 30px !important;
    width: 100%;
  }
`

export const Content = styled.div`
  /* position: absolute; */
  height: auto;
  /* top: 20%; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  width: 100%;

  @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
    /* top: 22.5%; */
    /* min-height: 500px; */
  }
`

export const AppFooter = styled.footer`
  width: 100%;
  margin-top: 40px;
  display: flex;
  padding: 20px;
  background-color: ${Theme.colors.default.lightGray};
  /* background-color: #fff; */
  /* position: absolute; */
  /* bottom: 0; */
  background-position: top;
  /* background-size: 100% 3px;
  /* box-shadow: 0 -6px 10px -6px rgba(0,0,0,0.3); */

  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    height: 90px;
    min-height: 90px;
    /* top: calc(100% - 132px); */
  }

  a {
    color: ${Theme.colors.default.darkest};
    font-family: ${Theme.fonts.headings.family};
    font-size: 13px;
    font-weight: 400;
    border-bottom: 1px solid ${Theme.colors.default.darkest};
  }

  p {
    color: ${Theme.colors.default.darkest};
    font-family: ${Theme.fonts.headings.family};
    font-size: 13px;
    text-align: center;
    width: 100%;
    font-weight: 400;
    b {
      font-weight: 500;
    }
  }
`