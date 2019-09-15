import React from "react";
import { useAlert } from "react-alert";
import { Query, Mutation } from "react-apollo";
import { GET_ALL_WORKERS, DELETE_CONTRACTOR } from "./graphql";
import WorkersTable from "../../../../../../components/WorkersTable";

const Workers = () => {
  const alert = useAlert();
  return (
    <Query errorPolicy="ignore" query={GET_ALL_WORKERS}>
      {({ loading, data, error }) => {
        if (loading) return <></>;
        if (error) {
          return console.log(error);
        }

        const { getAllContractors } = data;
        const formattedData = [];

        getAllContractors.forEach(({ address, income, jobs, ...rest }) => {
          const { state, city, street, postalCode } = address;
          const action = {
            address: `${street} ${city}, ${state} ${postalCode}`,
            jobs: jobs.map(({ jobDescription }, index) => (
              <ul> {`${index + 1}: ${jobDescription}`} </ul>
            )),
            ...rest
          };
          formattedData.push(action);
        });

        return (
          <Mutation
            mutation={DELETE_CONTRACTOR}
            onCompleted={() => alert.success("Contractor deleted.")}
            onError={() => alert.error("Failed to remove contractor")}
            refetchQueries={[{ query: GET_ALL_WORKERS }]}
          >
            {deleteContractor => (
              <WorkersTable
                data={formattedData}
                deleteContractor={deleteContractor}
              />
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default Workers;
