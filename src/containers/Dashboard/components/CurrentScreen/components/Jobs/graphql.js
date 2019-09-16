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

export const MARK_JOB_COMPLETED = gql`
  mutation markJobCompleted($jobId: ID!, $actualTime: Int!) {
    markJobCompleted(jobId: $jobId, actualTime: $actualTime) {
      job {
        id
      }
      error {
        message
      }
    }
  }
`;

export const MARK_JOB_PAID = gql`
  mutation markJobPaid($jobId: ID!) {
    markJobPaid(jobId: $jobId) {
      job {
        id
      }
      error {
        message
      }
    }
  }
`;

export const ASSIGN_CONTRACTOR = gql`
  mutation assignContractorToJob($contractorId: ID!, $jobId: ID!) {
    assignContractorToJob(contractorId: $contractorId, jobId: $jobId) {
      job {
        id
      }
      error {
        message
      }
    }
  }
`;

export const REMOVE_CONTRACTOR = gql`
  mutation removeContractorFromJob($contractorId: ID!, $jobId: ID!) {
    removeContractorFromJob(contractorId: $contractorId, jobId: $jobId) {
      job {
        id
      }
      error {
        message
      }
    }
  }
`;
