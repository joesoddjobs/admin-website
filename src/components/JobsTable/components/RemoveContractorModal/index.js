import React, { useState } from "react";
import Select from "react-select";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, DialogContentText } from "@material-ui/core";
import ModalContainer from "./styles";

const formatAssignedContractors = assignedContractors => {
  const formattedContractors = [];
  assignedContractors.forEach(({ id, firstName, lastName }) => {
    formattedContractors.push({ value: id, label: `${firstName} ${lastName}` });
  });

  return formattedContractors;
};

const RemoveContractorModal = ({
  setOpenRemove,
  removeContractorFromJob,
  assignedContractors,
  jobId,
  alert
}) => {
  const [contractorId, setContractorId] = useState("");

  return (
    <ModalContainer>
      <DialogTitle>Remove Contractor From Job</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please choose a contractor to remove from this job.
        </DialogContentText>
        <Select
          options={formatAssignedContractors(assignedContractors)}
          onChange={e => setContractorId(e.value)}
        />
        <DialogActions>
          <Button
            onClick={() =>
              removeContractorFromJob(contractorId, jobId, alert, setOpenRemove)
            }
          >
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </ModalContainer>
  );
};

export default RemoveContractorModal;
