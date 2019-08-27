import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  margin-top: 29px;
  align-items: center;
  padding: 0px 12.5%;
`

export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.font.primary};
  line-height: 37px;
  margin-bottom: 21px;
`

export const Body = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.primary};
  line-height: 25px;
  text-align: center;
`
