import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  align-items: center;
`

export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.font.primary};
  line-height: 37px;
`

export const PortraitContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
`
