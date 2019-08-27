import React from 'react'
import {
  Container,
  InfoContainer,
  Header,
  Info,
  BookAJobButton,
  Image
} from './styles'

const IntroBlock = () => (
  <Container>
    <InfoContainer>
      <Header>Jobs the Big Guys Won&apos;t Touch</Header>
      <Info>
        Tackle the projects that the landscapers, movers, and contractors
        won&apos;t even call you back for, with Joe&apos;s Odd Jobs
      </Info>
      <BookAJobButton to="/">Book a Job</BookAJobButton>
    </InfoContainer>
    <Image />
  </Container>
)

export default IntroBlock
