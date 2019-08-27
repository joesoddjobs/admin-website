import React from 'react'
import { Container, WorkerImage } from './styles'
import RateInfo from './components/RateInfo'

const PriceBlock = () => {
  return (
    <Container>
      <RateInfo />
      <WorkerImage />
    </Container>
  )
}

export default PriceBlock
