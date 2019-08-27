import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  margin-left: 40px;
`

export const Icon = styled.img`
  height: ${({ size }) => size || '80px'};
  width: ${({ size }) => size || '80px'};
`

export const Label = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.font.primary};
  margin-top: 15px;
`
