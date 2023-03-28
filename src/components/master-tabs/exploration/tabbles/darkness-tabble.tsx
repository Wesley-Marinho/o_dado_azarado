import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Darkness = {
  type: string;
  example: string;
  disadvantage: string;
};

const GET_DARKNESSES_QUERY = gql`
  query {
    darknesses(first: 2) {
      type
      example
      disadvantage
    }
  }
`;

export function DarknessTablle() {
  const { data } = useQuery<{ darknesses: Darkness[] }>(GET_DARKNESSES_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Escuridão</th>
          <th>Exemplo</th>
          <th>Desvatagens</th>
        </tr>
      </thead>

      <tbody>
        {data?.darknesses.map(({ type, example, disadvantage }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{example}</td>
            <td>{disadvantage}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
