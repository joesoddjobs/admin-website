import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import WorkerPng from '../../../../assets/images/WorkerImage.png'

export const Container = styled(Flex)`
  width: 100%;
  height: 600px;
  background-color: ${({ theme }) => theme.colors.background.quaternary};
`

export const WorkerImage = styled.img.attrs({
  src: WorkerPng
})`
  width: 437px;
  height: 416px;
  margin-top: 92px;
  margin-left: 143px;
`
