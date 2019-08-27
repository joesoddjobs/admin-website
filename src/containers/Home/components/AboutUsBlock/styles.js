import styled from 'styled-components'
import { Flex } from '@rebass/grid'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 663px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`
