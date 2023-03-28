import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Distance = {
  type: string;
  effect: string;
};

const GET_DISTANCES_QUERY = gql`
  query {
    distances {
      type
      effect
    }
  }
`;

export function DistanceTablle() {
  const { data } = useQuery<{ distances: Distance[] }>(GET_DISTANCES_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Efeito</th>
        </tr>
      </thead>
      <tbody>
        {data?.distances.map(({ type, effect }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
