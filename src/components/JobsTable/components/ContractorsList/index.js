import React from "react";
import ContractorItem from "./components/ContractorItem";

const ContractorsList = ({ contractors }) => (
  <ul
    style={{
      listStyle: "none",
      padding: 0
    }}
  >
    {contractors.map(contractor => (
      <ContractorItem contractor={contractor} />
    ))}
  </ul>
);

export default ContractorsList;
