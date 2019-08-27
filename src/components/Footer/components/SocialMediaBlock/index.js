import React from 'react'
import { Container, IconContainer, Icon, Image, CopyRightInfo } from './styles'
import { socialMediaInfo } from './constants'

const SocialMediaIcons = socialMediaInfo.map(platform => (
  <Icon key={platform.link} href={platform.link}>
    <Image src={platform.icon} />
  </Icon>
))

const SocialMediaBlock = () => {
  return (
    <Container>
      <IconContainer>{SocialMediaIcons}</IconContainer>
      <CopyRightInfo>© 2010 — 2020 Privacy — Terms</CopyRightInfo>
    </Container>
  )
}

export default SocialMediaBlock
