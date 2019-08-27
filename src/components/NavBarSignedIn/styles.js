import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import logo from '../../assets/images/JoesOddJobsLogo.png'

export const Container = styled(Flex)`
  width: 100%;
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const JoesOddJobsLogo = styled.img.attrs({
  src: logo
})`
  width: 234px;
  height: 43px;
  margin-left: 5px;
`
