/* eslint-disable react/no-multi-comp */
import React, { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Paid from "@material-ui/icons/AttachMoney";
import AddContractor from "@material-ui/icons/PersonAdd";
import RemoveContractor from "@material-ui/icons/PersonAddDisabled";
import ContractorsList from "./components/ContractorsList";

export const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Paid: forwardRef((props, ref) => <Paid {...props} ref={ref} />),
  AddContractor: forwardRef((props, ref) => (
    <AddContractor {...props} ref={ref} />
  )),
  RemoveContractor: forwardRef((props, ref) => (
    <RemoveContractor {...props} ref={ref} />
  ))
};

export const columns = [
  { title: "Customer", field: "customer" },
  { title: "Job Type", field: "jobType" },
  {
    title: "Contractors",
    field: "contractors",
    render: ({ contractors }) => <ContractorsList contractors={contractors} />
  },
  { title: "Scheduled Date", field: "scheduledDateTime" },
  { title: "Estimated Time", field: "estimatedTime" },
  { title: "Rate", field: "rate" },
  { title: "Actual Time", field: "actualTime" },
  { title: "Status", field: "status" }
];

export const actions = (
  setOpen,
  setJobId,
  markJobPaid,
  alert,
  setOpenAssign,
  setOpenRemove,
  setAssignedContractors
) => [
  rowData => ({
    icon: tableIcons.Check,
    tooltip: "Mark completed",
    iconProps: { fontSize: "small", color: "primary" },
    hidden: rowData.status === "COMPLETED" || rowData.status === "PAID",
    onClick: (event, { id }) => {
      setOpen(true);
      setJobId(id);
    }
  }),
  rowData => ({
    icon: tableIcons.Paid,
    tooltip: "Mark as paid",
    iconProps: { fontSize: "small", color: "primary" },
    hidden: rowData.status === "PAID",
    onClick: (event, { id }) => {
      markJobPaid(id, alert);
    }
  }),
  rowData => ({
    icon: tableIcons.AddContractor,
    tooltip: "Assign contractors to job",
    iconProps: { fontSize: "small", color: "primary" },
    hidden: rowData.status === "COMPLETED" || rowData.status === "PAID",
    onClick: (event, { id }) => {
      setOpenAssign(true);
      setJobId(id);
    }
  }),
  rowData => ({
    icon: tableIcons.RemoveContractor,
    tooltip: "Remove contractors from job",
    iconProps: { fontSize: "small", color: "primary" },
    hidden: rowData.status === "COMPLETED" || rowData.status === "PAID",
    onClick: (event, { id }) => {
      setAssignedContractors(rowData.contractors);
      setOpenRemove(true);
      setJobId(id);
    }
  })
];

export const editable = (deleteJob, alert) => ({
  onRowDelete: ({ id }) =>
    new Promise(resolve => {
      setTimeout(() => {
        deleteJob(id, alert);
        resolve();
      }, 1000);
    })
});
