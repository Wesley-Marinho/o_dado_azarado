import { gql, useQuery } from "@apollo/client";
import { Table } from "react-bootstrap";

type Fight = {
  type: string;
  bonus: string;
  damage: string;
};

const GET_FIGHTS_QUERY = gql`
  query {
    fights {
      type
      bonus
      damage
    }
  }
`;

export function FightTablle() {
  const { data } = useQuery<{ fights: Fight[] }>(GET_FIGHTS_QUERY, {
    context: { clientName: "client1" },
  });

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Bonus</th>
          <th>Dano</th>
        </tr>
      </thead>
      <tbody>
        {data?.fights.map(({ type, bonus, damage }) => (
          <tr key={type}>
            <td>{type}</td>
            <td>{bonus}</td>
            <td>{damage}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
