import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Difficulty = {
  type: string;
  level: string;
};

const GET_DIFFICULTIES_QUERY = gql`
  query {
    difficulties {
      type
      level
    }
  }
`;

export function DifficultyTablle() {
  const { data } = useQuery<{ difficulties: Difficulty[] }>(GET_DIFFICULTIES_QUERY);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Clima</th>
          <th>Desvatagens</th>
        </tr>
      </thead>
      <tbody>
        {data?.difficulties.map(({ type, level }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{level}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
