import gql from "graphql-tag";

const GET_ALL_CUSTOMERS = gql`
  query getAllCustomers {
    getAllCustomers {
      id
      firstName
      lastName
      email
      phoneNumber
      address {
        street
        city
        state
        postalCode
      }
    }
  }
`;

export default GET_ALL_CUSTOMERS;
