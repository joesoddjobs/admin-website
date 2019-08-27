import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { Link } from 'react-router-dom'

export const Container = styled(Flex)`
  flex-direction: row;
  width: 33%;
  justify-content: flex-end;
`
export const Route = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.font.primary};
  text-decoration: none;
  margin-right: 15px;
  margin-left: 15px;
  &:hover {
    color: ${({ theme }) => theme.colors.font.primary};
  }
`
