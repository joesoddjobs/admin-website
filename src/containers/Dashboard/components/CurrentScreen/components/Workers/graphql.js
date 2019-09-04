import gql from "graphql-tag";

export const GET_ALL_WORKERS = gql`
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

export const DELETE_CONTRACTOR = gql`
  mutation deleteContractor($contractorId: ID!) {
    deleteContractor(contractorId: $contractorId) {
      success
      error {
        message
      }
    }
  }
`;
