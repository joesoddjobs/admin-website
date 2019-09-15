import React, { useState } from "react";
import Select from "react-select";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, DialogContentText } from "@material-ui/core";
import ModalContainer from "./styles";

const AssignContractorModal = ({
  setOpenAssign,
  assignContractorToJob,
  contractors,
  jobId,
  alert
}) => {
  const [contractorId, setContractorId] = useState("");

  return (
    <ModalContainer>
      <DialogTitle>Assign Contractor to Job</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please choose a contractor to assign to this job.
        </DialogContentText>
        <Select
          options={contractors}
          onChange={e => setContractorId(e.value)}
        />
        <DialogActions>
          <Button
            onClick={() =>
              assignContractorToJob(contractorId, jobId, alert, setOpenAssign)
            }
          >
            Confirm Time
          </Button>
        </DialogActions>
      </DialogContent>
    </ModalContainer>
  );
};

export default AssignContractorModal;
