import React from 'react'
import { Container, Quote, Circle, Customer } from './styles'

const TestimonialBlock = () => {
  return (
    <Container>
      <Quote>
        “Joe and his team took care of everything in a very professional manner
        at a level of quality that I would have done for myself.”
      </Quote>
      <Circle />
      <Customer>John S, Ridgewood Resident</Customer>
    </Container>
  )
}

export default TestimonialBlock
