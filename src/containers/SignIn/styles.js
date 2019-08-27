import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: auto;
  /* margin-top: 80px;
  margin-bottom: 20px; */
  padding 15px;
  width: 60%;
  background-color: white;
  border-radius: 8px;
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

export const DividerContainer = styled.div`
  width: 60%;
  margin: auto;
`

export const SignUpText = styled.h1`
  margin-bottom: 15px;
  font-size: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.background.tertiary};
  font-family: ${({ theme }) => theme.fonts.header.family};
`

export const ButtonContainer = styled.div`
  text-align: center;
`
