import styled from 'styled-components'
import * as theme from './AllThemes/theme'

export const Container = styled(theme.DarkMainColor)``

export const Header = styled(theme.DarkHeader)`
  height: 9.375rem;
  text-align: center;
`

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  padding-top: 1.875rem;
  text-shadow: 0rem 0rem 0.2rem #ccc;
`

export const Body = styled.div`
  margin: auto;
  max-width: 70vw;
  min-height: 100vh;
  padding-bottom: 2rem;
`
