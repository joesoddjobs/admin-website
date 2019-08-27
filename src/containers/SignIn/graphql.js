import gql from 'graphql-tag'

const LOGIN = gql`
  mutation loginCustomer($email: String!, $password: String!) {
    loginCustomer(email: $email, password: $password) {
      customer {
        id
      }
      token
      error {
        message
      }
    }
  }
`

export default LOGIN
