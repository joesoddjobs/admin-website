import React from "react";
import MaterialTable from "material-table";
import { columns, actions, editable, tableIcons } from "./constants";

const WorkersTable = () => (
  <MaterialTable
    title="Workers"
    columns={columns}
    editable={editable()}
    actions={actions()}
    icons={tableIcons}
    style={{ width: "100%" }}
    options={{ filtering: true }}
  />
);

export default WorkersTable;
