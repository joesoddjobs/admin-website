import gql from "graphql-tag";

export const GET_ALL_JOBS = gql`
  query getAllJobs {
    getAllJobs {
      id
      customerId
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
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

export const DELETE_JOB = gql`
  mutation deleteJob($jobId: ID!) {
    deleteJob(jobId: $jobId) {
      success
      error {
        message
      }
    }
  }
`;
