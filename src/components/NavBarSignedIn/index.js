import React from 'react'
import { Container, JoesOddJobsLogo } from './styles'
import RoutesRow from './components/RoutesRow'

const NavBarSignedIn = () => {
  return (
    <Container>
      <JoesOddJobsLogo />
      <RoutesRow />
    </Container>
  )
}

export default NavBarSignedIn
