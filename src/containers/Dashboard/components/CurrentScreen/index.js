import React from "react";
import WorkersTable from "../../../../components/WorkersTable";
import JobsTable from "../../../../components/JobsTable";
import CustomersTable from "../../../../components/CustomersTable";

const WORKERS = 0;
const JOBS = 1;

const CurrentScreen = ({ tab }) => {
  switch (tab) {
    case WORKERS:
      return <WorkersTable />;
    case JOBS:
      return <JobsTable />;
    default:
      return <CustomersTable />;
  }
};

export default CurrentScreen;
