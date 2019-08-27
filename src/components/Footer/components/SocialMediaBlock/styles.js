import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  width: 226px;
  margin-top: 75px;
  flex-direction: column;
  align-items: center;
`

export const IconContainer = styled(Flex)`
  flex-direction: row;
  width: 100%
  justify-content: space-between;
`

export const Icon = styled.a`
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
`

export const Image = styled.img`
  width: 100%;
  cursor: pointer;
`

export const CopyRightInfo = styled(Flex)`
  color: ${({ theme }) => theme.colors.font.primary};
  margin-top: 44px;
  font-size: 14px;
`
