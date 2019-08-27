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
export const HeaderText = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  font-size: 45px;
  text-align: center;
  color: ${({ theme }) => theme.colors.background.tertiary};
  font-family: ${({ theme }) => theme.fonts.header.family};
`

export const Spacer = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  display: flex;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
  text-align: center;
`
