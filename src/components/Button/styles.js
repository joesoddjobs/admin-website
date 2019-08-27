import styled from 'styled-components'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding-left: 25;
  padding-right: 25;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 20px;
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.font.secondary : theme.colors.font.primary};
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.colors.button.secondary : theme.colors.button.primary};
  border-radius: 5px;
  &:hover {
    color: ${({ secondary, theme }) =>
      secondary ? theme.colors.font.secondary : theme.colors.font.primary};
  }
`
