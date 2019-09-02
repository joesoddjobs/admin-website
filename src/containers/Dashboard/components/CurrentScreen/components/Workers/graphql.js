import gql from "graphql-tag";

const GET_ALL_WORKERS = gql`
  query getAllContractors {
    getAllContractors {
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
      income {
        yearToDate
        total
      }
      age
    }
  }
`;

export default GET_ALL_WORKERS;
