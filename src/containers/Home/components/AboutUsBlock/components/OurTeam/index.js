import React from 'react'
import Portrait from './components/Portrait'
import { TeamMembers } from './constants'
import { Container, Header, PortraitContainer } from './styles'

const Portraits = TeamMembers.map(teamMember => (
  <Portrait
    src={teamMember.image}
    name={teamMember.name}
    title={teamMember.title}
  />
))

const OurTeam = () => {
  return (
    <Container>
      <Header>Our Team</Header>
      <PortraitContainer>{Portraits}</PortraitContainer>
    </Container>
  )
}

export default OurTeam
