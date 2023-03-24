import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Escape = {
  type: string;
 effect: string;
};

const GET_ESCAPES_QUERY = gql`
  query {
    escapes {
      type
     effect
    }
  }
`;

export function EscapeTablle() {
  const { data } = useQuery<{ escapes: Escape[] }>(GET_ESCAPES_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Efeito</th>
        </tr>
      </thead>
      <tbody>
        {data?.escapes.map(({ type, effect }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
