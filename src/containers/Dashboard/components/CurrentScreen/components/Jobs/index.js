import React from "react";
import JobsTable from "../../../../../../components/JobsTable";
import { Query } from "react-apollo";
import GET_ALL_JOBS from "./graphql";

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
          ...rest
        }) => {
          const action = {
            customer: "Hello",
            contractors: " ", // TODO: Need to fix this
            status,
            jobType,
            rate,
            scheduledDateTime,
            ...rest
          };
          formattedData.push(action);
        }
      );
      return <JobsTable data={formattedData} />;
    }}
  </Query>
);

export default Jobs;
