import React from "react";
import { Query } from "react-apollo";
import moment from "moment";
import JobsTable from "../../../../../../components/JobsTable";
import { GET_ALL_JOBS } from "./graphql";
import { deleteJob, markJobCompleted } from "./helpers";

const Jobs = () => (
  <Query query={GET_ALL_JOBS}>
    {({ loading, data, error }) => {
      if (loading) return <></>;
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
            contractors: " ", // TODO: Need to fix this
            status,
            jobType,
            rate,
            scheduledDateTime: moment(Date(scheduledDateTime)).format("LLL"),
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
        />
      );
    }}
  </Query>
);

export default Jobs;
