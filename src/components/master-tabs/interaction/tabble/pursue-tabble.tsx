import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Pursue = {
  type: string;
  description: string;
};

const GET_PORSUES_QUERY = gql`
  query {
    pursues {
      type
      description
    }
  }
`;

export function PursueTablle() {
  const { data } = useQuery<{ pursues: Pursue[] }>(GET_PORSUES_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {data?.pursues.map(({ type, description }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
