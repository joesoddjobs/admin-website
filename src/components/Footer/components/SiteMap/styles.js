import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/images/JoesOddJobs2019Logo.png'

export const Container = styled(Flex)`
  width: 1000px;
  height: 95px;
  margin-top: 93px;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.font.primary};
  position: relative;
`

export const LogoContainer = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const JoesOddJobsLogo = styled.img.attrs({
  src: logo
})`
  width: 221px;
  height: 61px;
`

export const Route = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.font.primary};
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px;
  &:hover {
    color: ${({ theme }) => theme.colors.font.primary};
  }
`
