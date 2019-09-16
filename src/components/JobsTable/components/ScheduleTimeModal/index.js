import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, DialogContentText } from "@material-ui/core";
import ModalContainer from "./styles";

import "react-datepicker/dist/react-datepicker.css";

const ScheduleTimeModal = ({ setOpenSchedule, jobId, alert, scheduleJob }) => {
  const [dateTime, setDateTime] = useState("");
  return (
    <ModalContainer>
      <DialogTitle>Choose Date and Time</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please choose a date and time to complete the job.
        </DialogContentText>
        <DatePicker
          showTimeSelect
          selected={dateTime}
          onChange={e => setDateTime(e)}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeIntervals={15}
        />
        <DialogActions>
          <Button
            onClick={() => scheduleJob(dateTime, jobId, alert, setOpenSchedule)}
          >
            Confirm
          </Button>
        </DialogActions>
      </DialogContent>
    </ModalContainer>
  );
};

export default ScheduleTimeModal;
