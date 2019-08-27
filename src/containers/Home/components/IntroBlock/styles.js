import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import Button from '../../../../components/Button'
import TeamPicture from '../../../../assets/images/TeamPicture.png'

export const Container = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 700px;
  padding: 110px 80px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
`

export const InfoContainer = styled(Flex)`
  flex-direction: column;
  width: 422px;
`

export const Header = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 60px;
  color: ${({ theme }) => theme.colors.font.secondary};
  font-weight: 500;
  width: 100%;
  line-height: 70px;
  flex-wrap: wrap;
`

export const Info = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.font.secondary};
  line-height: 22px;
  margin-top: 10px;
`

export const BookAJobButton = styled(Button)`
  width: 200px;
  padding: 0px;
  margin-top: 56px;
`
export const Image = styled.img.attrs({
  src: TeamPicture
})`
  height: 480px;
  width: 650px;
`
