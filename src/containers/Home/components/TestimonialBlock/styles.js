import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.primary};
  align-items: center;
  padding: 132px 50px;
`

export const Quote = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`

export const Circle = styled(Flex)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.font.primary};
  margin: 20px 0px;
`

export const Customer = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`
