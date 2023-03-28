import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Ground = {
  type: string;
  disadvantage: string;
};

const GET_GROUNDS_QUERY = gql`
  query {
    grounds {
      type
      disadvantage
    }
  }
`;

export function GroundTablle() {
  const { data } = useQuery<{ grounds: Ground[] }>(GET_GROUNDS_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Desvatagens</th>
        </tr>
      </thead>
      <tbody>
        {data?.grounds.map(({ type, disadvantage }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{disadvantage}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
