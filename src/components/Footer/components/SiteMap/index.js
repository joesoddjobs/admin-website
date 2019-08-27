import React from 'react'
import { Container, LogoContainer, JoesOddJobsLogo } from './styles'
import RightRoutes from './components/RightRoutes'
import LeftRoutes from './components/LeftRoutes'

const SiteMap = () => {
  return (
    <Container>
      <LeftRoutes />
      <LogoContainer>
        <JoesOddJobsLogo />
      </LogoContainer>
      <RightRoutes />
    </Container>
  )
}

export default SiteMap
