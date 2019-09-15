import React, { useState, forwardRef } from "react";
import { useAlert } from "react-alert";
import { Dialog } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import MaterialTable from "material-table";
import { tableIcons, columns, editable, actions } from "./constants";
import ActualTimeModal from "./components/ActualTimeModal";

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const JobsTable = ({ data, deleteJob, markJobCompleted }) => {
  const [open, setOpen] = useState(false);
  const [jobId, setJobId] = useState("");
  const alert = useAlert();

  return (
    <>
      <MaterialTable
        icons={tableIcons}
        columns={columns}
        style={{ width: "100%" }}
        title="Jobs"
        editable={editable(deleteJob, alert)}
        actions={actions(setOpen, setJobId)}
        options={{
          filtering: true,
          actionsColumnIndex: -1,
          pageSize: 10,
          pageSizeOptions: [10, 20, 50]
        }}
        data={data}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <ActualTimeModal
          setOpen={setOpen}
          alert={alert}
          jobId={jobId}
          markJobCompleted={markJobCompleted}
        />
      </Dialog>
    </>
  );
};

export default JobsTable;
