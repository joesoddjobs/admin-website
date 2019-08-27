import React from 'react'
import { Container, JoesOddJobsLogo } from './styles'
import RoutesRow from './components/RoutesRow'

const NavBarSignedOut = () => {
  return (
    <Container>
      <JoesOddJobsLogo />
      <RoutesRow />
    </Container>
  )
}

export default NavBarSignedOut
