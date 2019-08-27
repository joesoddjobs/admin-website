import React from 'react'
import { Container, Icon, Label } from './styles'

const JobIcon = ({ label, icon, size, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon src={icon} size={size} />
      <Label>{label}</Label>
    </Container>
  )
}

export default JobIcon
