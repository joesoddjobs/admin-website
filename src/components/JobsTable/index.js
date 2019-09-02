import React from "react";
import { Mutation } from "react-apollo";
import MaterialTable from "material-table";
import { tableIcons, columns, editable, actions } from "./constants";
import DELETE_JOB from "./graphql";

const JobsTable = ({ data }) => (
  <Mutation
    mutation={DELETE_JOB}
    onCompleted={() => console.log("Complete")}
    onError={error => console.log(error)}
  >
    {deleteJob => (
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        style={{ width: "100%" }}
        title="Jobs"
        editable={editable(deleteJob)}
        actions={actions()}
        options={{
          filtering: true,
          actionsColumnIndex: -1,
          pageSize: 10,
          pageSizeOptions: [10, 20, 50]
        }}
        data={data}
      />
    )}
  </Mutation>
);

export default JobsTable;
