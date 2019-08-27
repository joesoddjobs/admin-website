/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from './components/Header'
import { Container, Wrapper, BodyWrapper, HeaderText } from './styles'
import { Table, Tabs, Descriptions } from 'antd'

const { TabPane } = Tabs

const workerColumns = [
  {
    title: 'Worker',
    dataIndex: 'worker',
    key: 'worker',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone'
  }
]

const paymentColumns = [
  {
    title: 'Card',
    dataIndex: 'card',
    key: 'card',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost'
  }
]

const workerData = [
  {
    key: '1',
    worker: 'John Brown',
    phone: 32
  },
  {
    key: '2',
    worker: 'Jim Green',
    phone: 42
  },
  {
    key: '3',
    worker: 'Joe Black',
    phone: 32
  }
]

const paymentData = [
  {
    key: '1',
    card: '********',
    cost: '$150.00'
  }
]

function callback(key) {
  // eslint-disable-next-line no-console
  console.log(key)
}

const Info = () => (
  <Container>
    <Header />
    <BodyWrapper>
      <Wrapper>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Job Details" key="1">
            <HeaderText>Details</HeaderText>
            <Descriptions>
              <Descriptions.Item label="Type">Lawn Mowing</Descriptions.Item>
              <Descriptions.Item label="Date">Nov 2, 2019</Descriptions.Item>
              <Descriptions.Item label="Status">Upcoming</Descriptions.Item>
              <Descriptions.Item label="Description">
                Only mow back lawn
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
          </TabPane>
          <TabPane tab="Worker Details" key="2">
            <HeaderText>Workers</HeaderText>
            <Table columns={workerColumns} dataSource={workerData} />
          </TabPane>
          <TabPane tab="Payment Details" key="3">
            <HeaderText>Payment Information</HeaderText>
            <Table columns={paymentColumns} dataSource={paymentData} />
          </TabPane>
        </Tabs>
      </Wrapper>
    </BodyWrapper>
  </Container>
)

export default Info
