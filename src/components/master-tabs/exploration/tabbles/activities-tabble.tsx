import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Activity = {
  type: string;
  effect: string;
};

const GET_ACTIVITIES_QUERY = gql`
  query {
    activities {
      type
      effect
    }
  }
`;

export function ActivityTablle() {
  const { data } = useQuery<{ activities: Activity[] }>(GET_ACTIVITIES_QUERY,
    { context: { clientName: "client1" } });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Efeito</th>
        </tr>
      </thead>
      <tbody>
        {data?.activities.map(({ type, effect }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
