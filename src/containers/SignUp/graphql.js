import gql from 'graphql-tag'

const REGISTER = gql`
  mutation registerCustomer($input: CustomerRegisterInput!) {
    registerCustomer(input: $input) {
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

export default REGISTER
