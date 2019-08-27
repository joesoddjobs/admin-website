import React from 'react'
import Header from './components/Header'
import { Container, Wrapper, BodyWrapper, HeaderText } from './styles'
import { Table } from 'antd'

const columns = [
  {
    title: 'Job Date',
    dataIndex: 'date',
    key: 'date',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Job Time',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: 'Job Type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status'
  },
  {
    title: 'Action',
    key: 'info',
    render: (text, record) => (
      <span>
        <a href="javascript:;">View Info</a>
      </span>
    )
  }
]

const data = [
  {
    key: '1',
    date: 'John Brown',
    time: 32,
    type: 'New York No. 1 Lake Park',
    status: 'status'
  },
  {
    key: '2',
    date: 'Jim Green',
    time: 42,
    type: 'London No. 1 Lake Park',
    status: 'status'
  },
  {
    key: '3',
    date: 'Joe Black',
    time: 32,
    type: 'Sidney No. 1 Lake Park',
    status: 'status'
  }
]

const Info = () => {
  return (
    <Container>
      <Header />
      <BodyWrapper>
        <Wrapper>
          <HeaderText>Scheduled Jobs</HeaderText>
          <Table columns={columns} dataSource={data} />
          <HeaderText>Past Jobs</HeaderText>
          <Table columns={columns} dataSource={data} />
        </Wrapper>
      </BodyWrapper>
    </Container>
  )
}

export default Info
