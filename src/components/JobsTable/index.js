import React from "react";
import MaterialTable from "material-table";
import { tableIcons, columns, editable, actions } from "./constants";

const JobsTable = () => (
  <MaterialTable
    icons={tableIcons}
    columns={columns}
    style={{ width: "100%" }}
    title="Jobs"
    editable={editable()}
    actions={actions()}
    options={{ filtering: true, actionsColumnIndex: -1 }}
  />
);

export default JobsTable;
