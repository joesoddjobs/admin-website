/* eslint-disable no-underscore-dangle */
import React, { Component } from "react";
import { withAlert } from "react-alert";
import { Form, Input, Button, Alert } from "antd";
import localStore from "store";
import { Wrapper, BodyWrapper, Header, ButtonContainer } from "./styles";
import { Mutation } from "react-apollo";
import { LOGIN_ADMIN } from "./graphql";

const storeAdmin = async ({ loginAdmin: { admin, token, error } }) => {
  if (!error) {
    localStore.set("admin", { token });
  } else {
    Alert("Could not sign in! Please try again!");
  }
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  handleSubmit = (e, history, loginAdmin) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        loginAdmin({ variables: values });
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState(prev => ({ confirmDirty: prev.confirmDirty || !!value }));
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { history } = this.props;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
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
    };
    return (
      <BodyWrapper>
        <Wrapper>
          <Header>Sign In</Header>
          <Mutation
            mutation={LOGIN_ADMIN}
            onCompleted={async data => {
              await storeAdmin(data);
              this.props.alert.success("Successfully signed in!");
              // navigate to dashboard:
              history.push({
                pathname: "/dashboard"
              });
            }}
            onError={() => this.props.alert.error("Could not sign in.")}
          >
            {loginAdmin => (
              <Form
                {...formItemLayout}
                onSubmit={e => this.handleSubmit(e, history, loginAdmin)}
              >
                <Form.Item label="E-mail">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        type: "email",
                        message: "The input is not valid E-mail!"
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your password!"
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
              </Form>
            )}
          </Mutation>
        </Wrapper>
      </BodyWrapper>
    );
  }
}

const WrappedSignIn = Form.create({ name: "register" })(SignIn);

export default withAlert()(WrappedSignIn);
