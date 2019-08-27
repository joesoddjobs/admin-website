import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  max-width: 470px;
  margin-left: 10%;
  margin-top: 171px;
`

export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 37px;
  margin-bottom: 25px;
`

export const Body = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 25px;
  margin-bottom: 48px;
`

export const Caveat = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 22px;
`
