import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  padding: 60px 0px;
`
export const HeaderText = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 60px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 70px;
  text-align: center;
`
