import React from "react";
import MaterialTable from "material-table";
import { tableIcons, columns } from "./constants";

const CustomersTable = ({ data }) => (
  <MaterialTable
    title="Customers"
    icons={tableIcons}
    columns={columns}
    style={{ width: "100%" }}
    options={{ filtering: true, pageSize: 10, pageSizeOptions: [10, 20, 50] }}
    data={data}
  />
);

export default CustomersTable;
