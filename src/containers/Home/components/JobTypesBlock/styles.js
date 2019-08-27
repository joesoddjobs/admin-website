import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 266px;
  padding-top: 48px;
  padding-bottom: 33px;
  background-color: ${({ theme }) => theme.colors.background.primary};
`

export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.font.primary};
`

export const JobTypeRow = styled(Flex)`
  flex-direction: row;
  margin-top: 30px;
`
