import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import Button from '../../../../components/Button'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  align-items: center;
  padding-top: 101px;
  padding-bottom: 96px;
`

export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 45px;
  text-align: center;
`

export const Body = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 25px;
  text-align: center;
  margin-top: 25px;
`
export const BookAJobButton = styled(Button)`
  width: 202px;
  margin-top: 40px;
`
