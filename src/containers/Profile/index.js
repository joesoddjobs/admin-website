import React from 'react'
import Header from './components/Header'
import {
  Container,
  Wrapper,
  BodyWrapper,
  ButtonContainer,
  Spacer
} from './styles'
import { Descriptions, Button } from 'antd'

const Info = () => (
  <Container>
    <Header />
    <BodyWrapper>
      <Wrapper>
        <Descriptions bordered>
          <Descriptions.Item label="First Name" span={3}>
            Joe
          </Descriptions.Item>
          <Descriptions.Item label="Last Name" span={3}>
            {"O'Keefe"}
          </Descriptions.Item>
          <Descriptions.Item label="Email" span={3}>
            josephokeefe3@gmail.com
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number" span={3}>
            2018881668
          </Descriptions.Item>
        </Descriptions>
        <ButtonContainer>
          <Spacer>
            <Button type="primary" htmlType="submit">
              Edit Profile
            </Button>
          </Spacer>
          <Spacer>
            <Button type="primary" htmlType="submit">
              Sign Out
            </Button>
          </Spacer>
        </ButtonContainer>
      </Wrapper>
    </BodyWrapper>
  </Container>
)

export default Info
