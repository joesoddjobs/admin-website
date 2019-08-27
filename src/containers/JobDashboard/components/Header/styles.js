import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import Button from '../../../../components/Button'

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
export const BodyText = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 25px;
  text-align: center;
  margin-top: 20px;
  max-width: 506px;
`
export const BookAJobButton = styled(Button)`
  margin-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
`
