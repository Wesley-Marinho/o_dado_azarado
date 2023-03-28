import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Movement = {
  type: string;
  effect: string;
};

const GET_MOVEMENTS_QUERY = gql`
  query {
    movements {
      type
      effect
    }
  }
`;

export function MovementTablle() {
  const { data } = useQuery<{ movements: Movement[] }>(GET_MOVEMENTS_QUERY, {
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
        {data?.movements.map(({ type, effect }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
