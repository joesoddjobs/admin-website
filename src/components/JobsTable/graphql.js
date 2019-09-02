import gql from "graphql-tag";

const DELETE_JOB = gql`
  mutation deleteJob($jobId: ID!) {
    deleteJob(jobId: $jobId) {
      success
      error {
        message
      }
    }
  }
`;

export default DELETE_JOB;
