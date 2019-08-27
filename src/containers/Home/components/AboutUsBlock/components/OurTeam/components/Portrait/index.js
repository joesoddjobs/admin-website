import React from 'react'
import { Container, Image, Name, Title } from './styles'

const Portrait = ({ src, name, title }) => {
  return (
    <Container>
      <Image src={src} />
      <Name>{name}</Name>
      <Title>{title}</Title>
    </Container>
  )
}

export default Portrait
