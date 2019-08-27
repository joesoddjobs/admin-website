import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { NavLink, Link } from 'react-router-dom'

const standardMargin = '10px'

export const Container = styled(Flex)`
  flex-direction: row;
  align-items: center;
`

export const HighlightedRoute = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.primary};
  text-decoration: none;
  margin-right: ${standardMargin};
  margin-left: ${standardMargin};
  &:hover {
    color: ${({ theme }) => theme.colors.font.primary};
    font-weight: 700;
  }
  &.active {
    border-bottom: ${({ theme, to }) =>
      to === '/' ? '' : `2px solid ${theme.colors.font.primary}`};
  }
`
export const BookJobButton = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.primary};
  margin-left: ${standardMargin};
  margin-right: ${standardMargin};
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.font.primary};
  padding: 8px 16px;
  &:hover {
    color: ${({ theme }) => theme.colors.font.primary};
    font-weight: 700;
    border-width: 2px;
  }
`
