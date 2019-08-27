/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Wrapper, BodyWrapper, Header } from './styles'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this._validAuthStates = ['signUp']
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }
  }

  handleSubmit = (e, registerCustomer) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const variables = { input: values }
        // eslint-disable-next-line no-console
        delete variables.input.agreement
        delete variables.input.confirm
        registerCustomer({ variables })
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
          <Header>Edit Profile</Header>
          <Form {...formItemLayout} onSubmit={e => this.handleSubmit(e)}>
            <Form.Item label="First Name">
              {getFieldDecorator('firstName', {
                initialValue: 'joe',
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
                initialValue: "o'keefe",
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
                initialValue: 'josephokeefe3@gmail.com',
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
            <Form.Item label="Old Password" hasFeedback>
              {getFieldDecorator('oldPassword', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your old password!'
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="New Password" hasFeedback>
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
                initialValue: '2018881668',
                rules: [
                  {
                    required: true,
                    message: 'Please input your phone number!'
                  }
                ]
              })(<Input style={{ width: '100%' }} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Edit Profile
              </Button>
            </Form.Item>
          </Form>
        </Wrapper>
      </BodyWrapper>
    )
  }
}

const WrappedSignUp = Form.create({ name: 'register' })(SignUp)

export default WrappedSignUp
