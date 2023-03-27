import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Condition = {
  type: string;
  effect: string;
};

const GET_CONDITIONS_QUERY = gql`
  query {
    conditions(first: 13) {
      type
      effect
    }
  }
`;

export function ConditionTablle() {
  const { data } = useQuery<{ conditions: Condition[] }>(GET_CONDITIONS_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Efeito</th>
        </tr>
      </thead>
      <tbody>
        {data?.conditions.map(({ type, effect }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{effect}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
