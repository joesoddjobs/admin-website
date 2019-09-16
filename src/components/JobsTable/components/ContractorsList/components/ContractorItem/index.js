import React from "react";
import Clear from "@material-ui/icons/Clear";
import { ItemContainer, ContractorName } from "./styles";

const ContractorItem = ({ contractor: { id, firstName, lastName } }) => (
  <ItemContainer>
    <ContractorName>{`${firstName} ${lastName}`}</ContractorName>
  </ItemContainer>
);

export default ContractorItem;
