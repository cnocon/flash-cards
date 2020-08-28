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
    padding: '60px 0 0',
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

export const SiteHeader = styled.h1`
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  font-family: ${Theme.fonts.accent.family};
  font-size: 90px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  line-height: 1.25;
  letter-spacing: 1px;
  position: absolute;
  width: 85%;
  max-width: 800px;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: 45px !important;
    top: 80px;
    width: 100%;
  }
  @media screen and (max-width: ${Theme.breakpoints.max.lg}) {
    font-size: 70px !important;
    top: 40px;
      width: 100%;
  }
`