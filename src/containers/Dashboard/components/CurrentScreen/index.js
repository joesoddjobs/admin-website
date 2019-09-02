import React from "react";
import Jobs from "./components/Jobs";
import Customers from "./components/Customers";
import Workers from "./components/Workers";

const WORKERS = 0;
const JOBS = 1;

const CurrentScreen = ({ tab }) => {
  switch (tab) {
    case WORKERS:
      return <Workers />;
    case JOBS:
      return <Jobs />;
    default:
      return <Customers />;
  }
};

export default CurrentScreen;
