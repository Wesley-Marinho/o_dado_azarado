import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Tendency = {
  type: string;
  description: string;
};

const GET_TENDENCIES_QUERY = gql`
  query {
    tendencies {
      type
      description
    }
  }
`;

export function TendencyTablle() {
  const { data } = useQuery<{ tendencies: Tendency[] }>(GET_TENDENCIES_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {data?.tendencies.map(({ type, description }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
