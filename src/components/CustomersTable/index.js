import React from "react";
import MaterialTable from "material-table";
import { tableIcons, editable, actions, columns } from "./constants";

const CustomersTable = () => (
  <MaterialTable
    title="Customers"
    icons={tableIcons}
    editable={editable()}
    actions={actions()}
    columns={columns}
    style={{ width: "100%" }}
    options={{ filtering: true }}
  />
);

export default CustomersTable;
