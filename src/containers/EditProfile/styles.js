import styled from 'styled-components'

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

export const Header = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  font-size: 45px;
  text-align: center;
  color: ${({ theme }) => theme.colors.background.tertiary};
  font-family: ${({ theme }) => theme.fonts.header.family};
`
