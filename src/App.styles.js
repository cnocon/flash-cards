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

export const MainWrapper = styled.div(
  ({theme}) => ({
    height: `100%`,
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