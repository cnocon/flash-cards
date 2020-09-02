import styled from "@emotion/styled"
import { css } from "@emotion/core"
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
    height: '100%',
    padding: '0',
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
    margin: 0 20px 0 0;
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
      padding-left: 20px;
      color: ${Theme.colors.default.darkest};
    }
  }

  a {
    font-family: ${Theme.fonts.accent.family};
    font-weight: 700;
    color: ${Theme.colors.default.base};
    font-size: 12px;
    letter-spacing: .5px;
    display: inline;
    text-transform: uppercase;
    &:hover,
    &:focus {
      border-bottom: 1px solid ${Theme.colors.default.darkest};
    }
  }
`

export const AppHeader = styled.header`
  position: relative;
  border-bottom: 2px solid ${Theme.colors.default.base};
  margin-bottom: 30px;
  box-shadow: 0 6px 10px -6px rgba(0,0,0,0.3);
  
`

export const AppHeading = styled.h1`
  text-align: center;
  font-weight: 900;
  line-height: 1em;
  margin: 15px auto 0;
  padding-bottom: 30px;
  text-transform: uppercase;
  color: ${Theme.colors.default.base};
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