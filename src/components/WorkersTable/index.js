import React from "react";
import MaterialTable from "material-table";
import { columns, actions, editable, tableIcons } from "./constants";

const WorkersTable = ({ data, deleteContractor }) => (
  <MaterialTable
    title="Workers"
    columns={columns}
    editable={editable(deleteContractor)}
    icons={tableIcons}
    style={{ width: "100%" }}
    options={{ filtering: true, pageSize: 10, pageSizeOptions: [10, 20, 50] }}
    data={data}
  />
);

export default WorkersTable;
