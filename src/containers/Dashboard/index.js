import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { styles } from "./styles";
import CurrentScreen from "./components/CurrentScreen";
import Background from "../../components/Background";

const Dashboard = ({ classes, history }) => {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newTabValue) => {
    setTab(newTabValue);
  };

  return (
    <Background>
      <Paper className={classes.root}>
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          centered
        >
          <Tab label="Workers" />
          <Tab label="Jobs" />
          <Tab label="Customers" />
        </Tabs>
      </Paper>
      <CurrentScreen tab={tab} history={history} />
    </Background>
  );
};

export default withStyles(styles)(Dashboard);
