import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Climate = {
  type: string;
  disadvantage: string;
};

const GET_CLIMATES_QUERY = gql`
  query {
    climates {
      type
      disadvantage
    }
  }
`;

export function ClimateTablle() {
  const { data } = useQuery<{ climates: Climate[] }>(GET_CLIMATES_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Clima</th>
          <th>Desvatagens</th>
        </tr>
      </thead>
      <tbody>
        {data?.climates.map(({ type, disadvantage }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{disadvantage}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
