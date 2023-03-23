import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Hunger = {
  type: string;
  description: string;
};

const GET_HUNGERS_QUERY = gql`
  query {
    hungers {
      type
      description
    }
  }
`;

export function HungerTablle() {
  const { data } = useQuery<{ hungers: Hunger[] }>(GET_HUNGERS_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Clima</th>
          <th>Desvatagens</th>
        </tr>
      </thead>
      <tbody>
        {data?.hungers.map(({ type, description }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
