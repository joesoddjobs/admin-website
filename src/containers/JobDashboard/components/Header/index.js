import React from 'react'
import { Container, HeaderText, BodyText, BookAJobButton } from './styles'

const Header = () => {
  return (
    <Container>
      <HeaderText>Job Dashboard</HeaderText>
      <BodyText>
        Book a new job, view and edit scheduled jobs and review past jobs
      </BodyText>
      <BookAJobButton to="/">Book a New Job</BookAJobButton>
    </Container>
  )
}

export default Header
