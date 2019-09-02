import React from "react";
import { Query } from "react-apollo";
import GET_ALL_WORKERS from "./graphql";
import WorkersTable from "../../../../../../components/WorkersTable";

const Workers = () => (
  <Query query={GET_ALL_WORKERS}>
    {({ loading, data, error }) => {
      if (loading) return <></>;
      if (error) {
        return console.log(error);
      }

      const { getAllContractors } = data;
      const formattedData = [];

      getAllContractors.forEach(({ address, income, ...rest }) => {
        const { state, city, street, postalCode } = address;
        const action = {
          address: `${street} ${city}, ${state} ${postalCode}`,
          ...rest
        };
        formattedData.push(action);
      });

      return <WorkersTable data={formattedData} />;
    }}
  </Query>
);

export default Workers;
