import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Mounted = {
  type: string;
  effect: string;
};

const GET_MOUNTEDS_QUERY = gql`
  query {
    mounteds {
      type
      effect
    }
  }
`;

export function MountedTablle() {
  const { data } = useQuery<{ mounteds: Mounted[] }>(GET_MOUNTEDS_QUERY, {
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
        {data?.mounteds.map(({ type, effect }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
