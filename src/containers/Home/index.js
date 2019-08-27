import React from 'react'
import { Container } from './styles'
import {
  AboutUsBlock,
  BookAJobBlock,
  IntroBlock,
  JobTypesBlock,
  PriceBlock,
  TestimonialBlock
} from './components'

const Home = () => (
  <Container>
    <IntroBlock />
    <JobTypesBlock />
    <PriceBlock />
    <AboutUsBlock />
    <TestimonialBlock />
    <BookAJobBlock />
  </Container>
)

export default Home
