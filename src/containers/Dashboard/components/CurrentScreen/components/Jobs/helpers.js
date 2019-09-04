import apolloClient from "../../../../../../client";
import { DELETE_JOB, GET_ALL_JOBS } from "./graphql";

export const deleteJob = async (id, alert) => {
  try {
    console.log(id);
    await apolloClient.mutate({
      mutation: DELETE_JOB,
      variables: { jobId: id },
      refetchQueries: [{ query: GET_ALL_JOBS }]
    });
  } catch (error) {
    return alert.error("Failed to delete job.");
  }

  return alert.success("Job deleted.");
};
