/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Divider, Button, Alert } from 'antd'
import { Mutation } from 'react-apollo'
import LOGIN from './graphql'
import {
  Wrapper,
  BodyWrapper,
  Header,
  DividerContainer,
  SignUpText,
  ButtonContainer
} from './styles'

const storeCustomer = async ({ loginCustomer: { customer, token, error } }) => {
  if (!error) {
    await localStorage.setItem('token', token)
    await localStorage.setItem('customerId', customer.id)
  } else {
    Alert('Could not register! Please try again!')
  }
}

class SignIn extends Component {
  constructor(props) {
    super(props)
    this._validAuthStates = ['signIn', 'signedOut', 'signedUp']
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }
  }

  handleSubmit = (e, history, loginCustomer) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // eslint-disable-next-line no-console
        loginCustomer({ variables: values })
        // navigate to job dashboard:
        history.push({
          pathname: '/job-dashboard'
        })
      }
    })
  }

  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState(prev => ({ confirmDirty: prev.confirmDirty || !!value }))
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  render() {
    const { history } = this.props
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 24,
          offset: 0
        }
      }
    }
    return (
      <BodyWrapper>
        <Wrapper>
          <Header>Sign In</Header>
          <Mutation
            mutation={LOGIN}
            onCompleted={data => {
              storeCustomer(data)
            }}
          >
            {loginCustomer => (
              <Form
                {...formItemLayout}
                onSubmit={e => this.handleSubmit(e, history, loginCustomer)}
              >
                <Form.Item label="E-mail">
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!'
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!'
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your password!'
                      },
                      {
                        validator: this.validateToNextPassword
                      }
                    ]
                  })(<Input.Password />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <ButtonContainer>
                    <Button type="primary" htmlType="submit">
                      Sign In
                    </Button>
                  </ButtonContainer>
                </Form.Item>
                <DividerContainer>
                  <Divider />
                </DividerContainer>
                <SignUpText>New to Joe&apos;s Odd Jobs?</SignUpText>
                <Form.Item {...tailFormItemLayout}>
                  <ButtonContainer>
                    <Button type="primary" htmlType="submit">
                      <Link to="/sign-up">Create Your Account</Link>
                    </Button>
                  </ButtonContainer>
                </Form.Item>
              </Form>
            )}
          </Mutation>
        </Wrapper>
      </BodyWrapper>
    )
  }
}

const WrappedSignIn = Form.create({ name: 'register' })(SignIn)

export default WrappedSignIn
