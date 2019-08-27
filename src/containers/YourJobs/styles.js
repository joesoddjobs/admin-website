import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
`

export const Wrapper = styled.div`
  margin: auto;
  /* margin-top: 80px;
  margin-bottom: 20px; */
  padding 15px;
  width: 60%;
  background-color: white;
  border-radius: 5px;
`
export const BodyWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`
