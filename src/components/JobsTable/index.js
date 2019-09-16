import React, { useState, forwardRef } from "react";
import { useAlert } from "react-alert";
import { Dialog } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import MaterialTable from "material-table";
import { tableIcons, columns, editable, actions } from "./constants";
import ActualTimeModal from "./components/ActualTimeModal";
import AssignContractorModal from "./components/AssignContractorModal";
import RemoveContractorModal from "./components/RemoveContractorModal";

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const JobsTable = ({
  data,
  deleteJob,
  markJobCompleted,
  markJobPaid,
  assignContractorToJob,
  removeContractorFromJob,
  contractors
}) => {
  const [open, setOpen] = useState(false);
  const [openAssign, setOpenAssign] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [assignedContractors, setAsssignedContractors] = useState("");
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
        actions={actions(
          setOpen,
          setJobId,
          markJobPaid,
          alert,
          setOpenAssign,
          setOpenRemove,
          setAsssignedContractors
        )}
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
      <Dialog
        open={openAssign}
        onClose={() => setOpenAssign(false)}
        TransitionComponent={Transition}
      >
        <AssignContractorModal
          contractors={contractors}
          setOpenAssign={setOpenAssign}
          assignContractorToJob={assignContractorToJob}
          jobId={jobId}
          alert={alert}
        />
      </Dialog>
      <Dialog
        open={openRemove}
        onClose={() => setOpenRemove(false)}
        TransitionComponent={Transition}
      >
        <RemoveContractorModal
          assignedContractors={assignedContractors}
          setOpenRemove={setOpenRemove}
          removeContractorFromJob={removeContractorFromJob}
          jobId={jobId}
          alert={alert}
        />
      </Dialog>
    </>
  );
};

export default JobsTable;
