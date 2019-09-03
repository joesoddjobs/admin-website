import gql from "graphql-tag";

export const LOGIN_ADMIN = gql`
  mutation loginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      admin {
        id
        email
      }
      token
      error {
        message
      }
    }
  }
`;
