import React from "react";
import CustomersTable from "../../../../../../components/CustomersTable";
import { Query } from "react-apollo";
import GET_ALL_CUSTOMERS from "./graphql";

const Customers = () => (
  <Query query={GET_ALL_CUSTOMERS}>
    {({ loading, data, error }) => {
      if (loading) return <></>;
      if (error) {
        return console.log(error);
      }

      const { getAllCustomers } = data;
      const formattedData = [];

      getAllCustomers.forEach(({ address, ...rest }) => {
        const { street, city, state, postalCode } = address;
        const action = {
          address: `${street} ${city}, ${state} ${postalCode}`,
          ...rest
        };
        formattedData.push(action);
      });

      return <CustomersTable data={formattedData} />;
    }}
  </Query>
);

export default Customers;
