import React from "react";
import { Query } from "react-apollo";
import moment from "moment";
import JobsTable from "../../../../../../components/JobsTable";
import { GET_ALL_JOBS } from "./graphql";
import { GET_ALL_WORKERS } from "../Workers/graphql";
import {
  deleteJob,
  markJobCompleted,
  markJobPaid,
  assignContractorToJob,
  removeContractorFromJob
} from "./helpers";

const Jobs = () => {
  return (
    <Query query={GET_ALL_WORKERS}>
      {({ loading, data, error }) => {
        if (loading) return null;
        if (error) {
          return console.log(error);
        }

        const { getAllContractors } = data;
        const formattedContractors = [];

        getAllContractors.forEach(({ id, firstName, lastName }) => {
          formattedContractors.push({
            value: id,
            label: `${firstName} ${lastName}`
          });
        });

        return (
          <Query query={GET_ALL_JOBS}>
            {({ loading, data, error }) => {
              if (loading) return null;
              if (error) {
                return console.log(error);
              }

              const { getAllJobs } = data;
              const formattedData = [];
              getAllJobs.forEach(
                ({
                  status,
                  jobType,
                  rate,
                  scheduledDateTime,
                  contractors,
                  customer,
                  ...rest
                }) => {
                  const { id, firstName, lastName, ...customerInfo } = customer;
                  const action = {
                    customer: `${firstName} ${lastName}`,
                    customerId: id,
                    contractors,
                    status,
                    jobType,
                    rate,
                    scheduledDateTime: moment(Date(scheduledDateTime)).format(
                      "LLL"
                    ),
                    ...rest,
                    ...customerInfo
                  };
                  formattedData.push(action);
                }
              );
              return (
                <JobsTable
                  data={formattedData}
                  deleteJob={deleteJob}
                  markJobCompleted={markJobCompleted}
                  markJobPaid={markJobPaid}
                  assignContractorToJob={assignContractorToJob}
                  removeContractorFromJob={removeContractorFromJob}
                  contractors={formattedContractors}
                />
              );
            }}
          </Query>
        );
      }}
    </Query>
  );
};

export default Jobs;
