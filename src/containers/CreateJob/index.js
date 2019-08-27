/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, DatePicker, Radio } from 'antd'
import { Wrapper, BodyWrapper, Header } from './styles'

const { TextArea } = Input

class SignUp extends Component {
  constructor(props) {
    super(props)
    this._validAuthStates = ['signUp']
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log('Received values of form: ', values)
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
        sm: { span: 6, offset: 2 }
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
          offset: 8
        }
      }
    }

    return (
      <BodyWrapper>
        <Wrapper>
          <Header>Book a Job</Header>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Job Type">
              {getFieldDecorator('radio-button', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the job type!',
                    whitespace: true
                  }
                ]
              })(
                <Radio.Group>
                  <Radio.Button value="landscaping">Landscaping</Radio.Button>
                  <Radio.Button value="lawnmowing">Lawn Mowing</Radio.Button>
                  <Radio.Button value="moving">Moving</Radio.Button>
                  <Radio.Button value="furniture">
                    Furniture Assembly
                  </Radio.Button>
                  <Radio.Button value="painting">Painting</Radio.Button>
                  <Radio.Button value="cleaning">Cleaning</Radio.Button>
                  <Radio.Button value="opther">Other</Radio.Button>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="Job Description">
              {getFieldDecorator('job-description')(
                <TextArea placeholder="Description" autosize />
              )}
            </Form.Item>
            <Form.Item label="Number of Workers">
              {getFieldDecorator('worker-estimate', {
                initialValue: 1,
                rules: [
                  {
                    required: true,
                    message: 'Please input the number of workers!',
                    whitespace: true
                  }
                ]
              })(<InputNumber min={1} max={10} />)}
              <span className="ant-form-text"> worker(s)</span>
            </Form.Item>
            <Form.Item label="Time Estimate">
              {getFieldDecorator('time-estimate', {
                initialValue: 1,
                rules: [
                  {
                    required: true,
                    message: 'Please input a time estimate!',
                    whitespace: true
                  }
                ]
              })(<InputNumber min={1} max={10} />)}
              <span className="ant-form-text"> hour(s)</span>
            </Form.Item>
            <Form.Item label="Job Date and Time">
              {getFieldDecorator('date-time-picker', {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: 'Please select a date and time!'
                  }
                ]
              })(<DatePicker showTime />)}
            </Form.Item>
            <Form.Item label="Secondary Date and Time">
              {getFieldDecorator('date-time-picker2', {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: 'Please select a secondary date and time!'
                  }
                ]
              })(<DatePicker showTime />)}
            </Form.Item>
            <Form.Item label="Job Location (City)">
              {getFieldDecorator('city', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the city the job is in!',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Job Location (Street Adress)">
              {getFieldDecorator('adress', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the job street adress!',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Job Location (Zip Code)">
              {getFieldDecorator('adress', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the job adress!',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Book Now
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
