import React from "react";
import { useAlert } from "react-alert";
import MaterialTable from "material-table";
import { tableIcons, columns, editable, actions } from "./constants";

const JobsTable = ({ data, deleteJob }) => {
  const alert = useAlert();

  return (
    <MaterialTable
      icons={tableIcons}
      columns={columns}
      style={{ width: "100%" }}
      title="Jobs"
      editable={editable(deleteJob, alert)}
      actions={actions()}
      options={{
        filtering: true,
        actionsColumnIndex: -1,
        pageSize: 10,
        pageSizeOptions: [10, 20, 50]
      }}
      data={data}
    />
  );
};

export default JobsTable;
