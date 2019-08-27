/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { Form, Input, Checkbox, Button, Alert } from 'antd'
import { Wrapper, BodyWrapper, Header } from './styles'
import REGISTER from './graphql'
import { Mutation } from 'react-apollo'

const storeCustomer = async ({
  registerCustomer: { customer, token, error }
}) => {
  if (!error) {
    await localStorage.setItem('token', token)
    await localStorage.setItem('customerId', customer.id)
  } else {
    Alert('Could not register! Please try again!')
  }
}

class SignUp extends Component {
  constructor(props) {
    super(props)
    this._validAuthStates = ['signUp']
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }
  }

  handleSubmit = (e, history, registerCustomer) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const variables = { input: values }
        // eslint-disable-next-line no-console
        delete variables.input.agreement
        delete variables.input.confirm
        registerCustomer({ variables })
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
          span: 12,
          offset: 6
        }
      }
    }

    return (
      <BodyWrapper>
        <Wrapper>
          <Header>Create Account</Header>
          <Mutation
            mutation={REGISTER}
            onCompleted={data => {
              storeCustomer(data)
            }}
          >
            {registerCustomer => (
              <Form
                {...formItemLayout}
                onSubmit={e => this.handleSubmit(e, history, registerCustomer)}
              >
                <Form.Item label="First Name">
                  {getFieldDecorator('firstName', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your first name!',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Last Name">
                  {getFieldDecorator('lastName', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your last name!',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
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
                <Form.Item label="Confirm Password" hasFeedback>
                  {getFieldDecorator('confirm', {
                    rules: [
                      {
                        required: true,
                        message: 'Please confirm your password!'
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item label="Phone Number">
                  {getFieldDecorator('phoneNumber', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your phone number!'
                      }
                    ]
                  })(<Input style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  {getFieldDecorator('agreement', {
                    valuePropName: 'checked'
                  })(
                    <Checkbox>
                      I have read the <a href="">agreement</a>
                    </Checkbox>
                  )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Create Account
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Mutation>
        </Wrapper>
      </BodyWrapper>
    )
  }
}

const WrappedSignUp = Form.create({ name: 'register' })(SignUp)

export default WrappedSignUp
