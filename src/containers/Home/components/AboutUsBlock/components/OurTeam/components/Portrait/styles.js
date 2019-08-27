import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 0px 15px;
`

export const Image = styled.img`
  width: 240px;
  height: 250px;
`

export const Name = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.font.primary};
  line-height: 32px;
  margin-top: 27px;
`

export const Title = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.font.primary};
  line-height: 19px;
  margin-top: 10px;
`
