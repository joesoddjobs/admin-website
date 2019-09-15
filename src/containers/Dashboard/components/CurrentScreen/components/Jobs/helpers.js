import apolloClient from "../../../../../../client";
import {
  DELETE_JOB,
  GET_ALL_JOBS,
  MARK_JOB_COMPLETED,
  MARK_JOB_PAID
} from "./graphql";

export const deleteJob = async (id, alert) => {
  try {
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

export const markJobCompleted = async (jobId, actualTime, alert, setOpen) => {
  try {
    await apolloClient.mutate({
      mutation: MARK_JOB_COMPLETED,
      variables: { jobId, actualTime },
      refetchQueries: [{ query: GET_ALL_JOBS }]
    });
  } catch (error) {
    return alert.error("Failed to mark job completed.");
  }

  setOpen(false);

  return alert.success("Job marked completed");
};

export const markJobPaid = async (jobId, alert) => {
  try {
    await apolloClient.mutate({
      mutation: MARK_JOB_PAID,
      variables: { jobId },
      refetchQueries: [{ query: GET_ALL_JOBS }]
    });
  } catch (error) {
    return alert.error("Failed to mark job paid.");
  }

  return alert.success("Job marked paid.");
};
