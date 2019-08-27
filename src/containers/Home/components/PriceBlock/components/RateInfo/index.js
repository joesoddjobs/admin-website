import React from 'react'
import { Container, Header, Body, Caveat } from './styles'

const RateInfo = () => {
  return (
    <Container>
      <Header>A Flat Rate of $25 Per Man Hour</Header>
      <Body>
        Whether you need one guy holding a ladder or four guys for the day
        weeding and mulching, we can handle any project you think of.
      </Body>
      <Caveat>
        All non-lawn care jobs are based off our rate of $25 per man hour and
        must be at least one hour in length.
      </Caveat>
    </Container>
  )
}

export default RateInfo
