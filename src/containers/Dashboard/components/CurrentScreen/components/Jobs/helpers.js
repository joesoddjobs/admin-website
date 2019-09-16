import apolloClient from "../../../../../../client";
import {
  DELETE_JOB,
  GET_ALL_JOBS,
  MARK_JOB_COMPLETED,
  MARK_JOB_PAID,
  ASSIGN_CONTRACTOR,
  REMOVE_CONTRACTOR
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

export const assignContractorToJob = async (
  contractorId,
  jobId,
  alert,
  setOpenAssign
) => {
  try {
    await apolloClient.mutate({
      mutation: ASSIGN_CONTRACTOR,
      variables: { contractorId, jobId },
      refetchQueries: [{ query: GET_ALL_JOBS }]
    });
  } catch (error) {
    return alert.error("Failed to assign contractor to job.");
  }

  setOpenAssign(false);
  return alert.success("Assigned contractor to job.");
};

export const removeContractorFromJob = async (
  contractorId,
  jobId,
  alert,
  setOpenRemove
) => {
  try {
    await apolloClient.mutate({
      mutation: REMOVE_CONTRACTOR,
      variables: { contractorId, jobId },
      refetchQueries: [{ query: GET_ALL_JOBS }]
    });
  } catch (error) {
    return alert.error("Failed to remove contractor from job.");
  }

  setOpenRemove(false);
  return alert.success("Removed contractor from job.");
};
