import gql from "graphql-tag";

const GET_ALL_JOBS = gql`
  query getAllJobs {
    getAllJobs {
      id
      customerId
      status
      contractors {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      address {
        street
        city
        state
        postalCode
      }
      jobType
      numberOfContractors
      estimatedTime
      actualTime
      jobDescription
      firstChoiceDateTime
      secondChoiceDateTime
      scheduledDateTime
      rate
      filled
    }
  }
`;

export default GET_ALL_JOBS;
