import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ModalContainer from "./styles";
import { Button } from "@material-ui/core";

const ActualTimeModal = ({ setOpen, alert, markJobCompleted, jobId }) => {
  const [actualTime, setActualTime] = useState(0);

  return (
    <ModalContainer>
      <DialogTitle>
        Please input the amount of time (in hours) the job took
      </DialogTitle>
      <DialogContent>
        <input type="text" onChange={e => setActualTime(e.target.value)} />
        <DialogActions>
          <Button
            onClick={() =>
              markJobCompleted(jobId, Number(actualTime), alert, setOpen)
            }
          >
            Confirm Time
          </Button>
        </DialogActions>
      </DialogContent>
    </ModalContainer>
  );
};

export default ActualTimeModal;
